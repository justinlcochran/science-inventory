import {BrowserRouter, Route, Routes} from "react-router-dom";
import { Auth } from "aws-amplify";
import './App.css';
import {Amplify} from "aws-amplify";
import awsconfig from "./aws-exports";
import {Authenticator, Heading, Text, useTheme, withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import Home from "./pages/Home";
import Flinn from "./pages/Flinn";
import York from "./pages/York";

Amplify.configure(awsconfig);

const formFields = {
    confirmVerifyUser: {
        confirmation_code: {
            label: 'New Label',
            placeholder: 'Enter your Confirmation Code:',
            isRequired: false,
        },
    },
};

const components = {
    VerifyUser: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },

    ConfirmVerifyUser: {
        Header() {
            const { tokens } = useTheme();
            return (
                <Heading
                    padding={`${tokens.space.xl} 0 0 ${tokens.space.xl}`}
                    level={3}
                >
                    Enter Information:
                </Heading>
            );
        },
        Footer() {
            return <Text>Footer Information</Text>;
        },
    },
};

export default function App() {
    return (<>
        <Authenticator
            formFields={formFields}
            components={components}
            hideSignUp={true}
        >
            {({ signOut, user }) => (
                <main>
                    <h1>Hello {user.attributes.name}</h1>
                    <button onClick={signOut}>Sign out</button>
                    <BrowserRouter>
                        <Routes>
                            <Route exact path='/prep' element={<Home />} />
                            <Route exact path='/flinn' element={<Flinn />} />
                            <Route exact path='/york' element={<York />} />
                        </Routes>
                    </BrowserRouter>
                </main>
            )}
        </Authenticator>

        </>
    );
}

// function App() {
//     Auth.currentSession()
//         .then(data => {
//             const accessToken = data.getAccessToken().getJwtToken();
//             // Use the access token as needed
//         })
//         .catch(error => {
//             // Handle any errors
//             console.log(error, "got it")
//         });
//
//     console.log(process.env.AWS_APP_ID, "env")
//
//   return (
//       <div className="App h-screen">
//           <Authenticator
//               hideSignUp={true}
//           >
//               {({ signOut, user }) => (
//                   <main>
//                       <h1>Hello {user.username}</h1>
//                       <button onClick={signOut}>Sign out</button>
//                   </main>
//               )}
//           </Authenticator>

//       </div>
//   );
// }

// export default withAuthenticator(App);
