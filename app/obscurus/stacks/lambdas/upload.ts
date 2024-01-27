import AWS from 'aws-sdk';
import { execSync } from 'child_process';
import path from 'path';
import os from 'os';
import fs from 'fs';
import { Function } from 'sst/node/function';
import { Bucket } from 'sst/node/bucket';

const s3 = new AWS.S3();

export const handler = async (event: { Records: { s3: { object: { key: any; }; }; }[]; }) => {
    const inputBucket = Bucket.inputBucket.bucketName// Replace with your input bucket name
    const outputBucket = Bucket.outputBucket.bucketName // Replace with your output bucket name
    const inputFileKey = event.Records[0].s3.object.key;
    const outputFileKey = inputFileKey.replace('.webm', '.mp4');

    // Download the file from S3 to the /tmp directory
    const inputFilePath = path.join(os.tmpdir(), inputFileKey);
    const outputFilePath = path.join(os.tmpdir(), outputFileKey);
    const downloadParams = {
        Bucket: inputBucket,
        Key: inputFileKey
    };

    try {
        const inputData = await s3.getObject(downloadParams).promise();
        if (inputData.Body instanceof Buffer || inputData.Body instanceof Uint8Array) {
            fs.writeFileSync(inputFilePath, inputData.Body);
          }

        // Convert the video using FFmpeg
        execSync(`ffmpeg -i ${inputFilePath} -c:v libx264 ${outputFilePath}`);

        // Upload the converted file to S3
        const uploadParams = {
            Bucket: outputBucket,
            Key: outputFileKey,
            Body: fs.readFileSync(outputFilePath)
        };
        await s3.putObject(uploadParams).promise();

        // Clean up temporary files
        fs.unlinkSync(inputFilePath);
        fs.unlinkSync(outputFilePath);

        return { message: 'Conversion successful', outputFileKey };
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};
