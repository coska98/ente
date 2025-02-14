import Page_ from "@/accounts/pages/two-factor/recover";
import { useAppContext } from "@/new/photos/types/context";

const Page = () => (
    <Page_ appContext={useAppContext()} twoFactorType="passkey" />
);

export default Page;
