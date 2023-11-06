export async function getServerSideProps() {
    const command = new PutObjectCommand({
      ACL: "public-read",
      Key: crypto.randomUUID(),
      Bucket: Bucket.public.bucketName,
    });
    const url = await getSignedUrl(new S3Client({}), command);
  
    return { props: { url } };
  }

  export default function Form({ url }: { url: string }) {
    return (
        <>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
  
            const file = (e.target as HTMLFormElement).file.files?.[0]!;
  
            const image = await fetch(url, {
              body: file,
              method: "PUT",
              headers: {
                "Content-Type": file.type,
                "Content-Disposition": `attachment; filename="${file.name}"`,
              },
            });
  
            window.location.href = image.url.split("?")[0];
          }}
        >
          <input name="file" type="file" accept="image/png, image/jpeg" />
          <button type="submit">Upload</button>
        </form>
      </>
    );
  }