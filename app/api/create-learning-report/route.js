import { google } from "googleapis";


export const POST = async(req) => {
    
        const learningReport  = await req.json();

        try {
            const auth  = new google.auth.GoogleAuth( {
                credentials: {
                    client_email: process.env.GOOGLE_CLIENT_EMAIL,
                    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
                },
                scopes: [
                    'https://www.googleapis.com/auth/drive',
                    'https://www.googleapis.com/auth/drive.file',
                    'https://www.googleapis.com/auth/spreadsheets'
                ]
            });

            const sheets = google.sheets({
                auth,
                version: 'v4'
            });

            const response =  await sheets.spreadsheets.values.append( {
                spreadsheetId: process.env.GOOGLE_SHEET_LEARNING_REPORT_ID,
                range: 'A1:F1',
                valueInputOption: "USER_ENTERED",
                requestBody: {
                    values: [
                        [
                            learningReport.createAt,
                            learningReport.testerName,
                            learningReport.courseName,
                            learningReport.whatDidYouLearnToday,
                            learningReport.urlSoruce,
                            learningReport.whenYouCanFinish,
                            learningReport.needHelpRemark
                        ]
                    ]
                }
            });

            return new Response(JSON.stringify(response.data), {status: 200});

        } catch (error) {
            console.log(error);
            return new Response('Faild create test report', { status: 500});
        }
}