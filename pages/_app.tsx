import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { RecoilRoot } from "recoil";
import { IntlProvider } from "next-intl";
function App({ Component, pageProps }: AppProps) {
    const router = useRouter();

    return (
        <RecoilRoot>
            <IntlProvider
                locale={router.locale || "en"}
                messages={pageProps.messages}
                timeZone="Asia/Seoul"
            >
                <Component {...pageProps} />
            </IntlProvider>
        </RecoilRoot>
    );
}

export default App;
