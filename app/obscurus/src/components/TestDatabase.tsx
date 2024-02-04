{/*IMPORTS*/ }
import Layout from "@/pages/layout";
import { GetServerSideProps } from "next";
import { Api } from "sst/node/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";


{/*FUNCTIONS*/ }
export async function getServerSideProps() {
    const fetchData = async () => {
        try {
            const apiURL = Api.Api.url
            const response = await fetch(apiURL + "/users");
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            // Process the data as needed
            return data;
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };
    const usersJSON = await fetchData();
    console.log(usersJSON)
    return {
        props: { usersJSON },
    };
};
const TestDatabase = ({ usersJSON }: { usersJSON: any }) => {
    return (
        <Layout>
            <div className="grid justify-center items-center pt-10 pb-5">
                <h1 className="text-3xl font-extrabold">Database Testing</h1>
            </div>
            <div className="grid grid-cols-3 gap-3 px-2">
                {usersJSON.map((user: any) => (
                    <Card key={user.sub} id="collapsed" className="overflow-auto justify-self-start drop-shadow-md border-2 hover:bg-accent bg-card">
                        <CardHeader>
                            <div className="space-x-2 flex items-center">
                                <CardTitle className="text-xl">
                                    <p>Name: {user.given_name} {user.family_name}</p>
                                </CardTitle>
                            </div>
                            <div className="grid grid-cols-1 gap-2">
                                <Label>Email: {user.email}</Label>
                                <Label>Birthday: {user.birthday}</Label>
                                <Label>Timezone: {user.timezone}</Label>
                                <Label>Language: {user.language}</Label>
                                <Label>Social Identity User: {user.is_logged_in_with_social_identity_provider.toString()}</Label>
                                <Label>Admin: {user.is_admin.toString()}</Label>
                                <Label>Specialised ID: {user.sub}</Label>
                            </div>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </Layout>
    );
};

{/*EXPORT*/ }
export default TestDatabase;