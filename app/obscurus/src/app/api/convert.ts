import AWS from 'aws-sdk';
import { execSync } from 'child_process';
import path from 'path';
import os from 'os';
import fs from 'fs';
import { Function } from 'sst/node/function';
import { Bucket } from 'sst/node/bucket';


export default async function handler (event: any ){
    const s3 = new AWS.S3();
    const inputBucket = Bucket.inputBucket.bucketName
    const outputBucket = Bucket.outputBucket.bucketName 
    const inputFileKey = event.Records[0].s3_object_key;
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
        execSync(`ffmpeg -i ${inputFilePath} -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k ${outputFilePath}`);

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