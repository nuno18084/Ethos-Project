import { PageSeo } from "../../components/PageSeo";
import { useLanguage } from "../../i18n/LanguageContext";
import { LegalPageLayout } from "../components/cristina/LegalPageLayout";

export function PrivacyPage() {
  const { language, t } = useLanguage();

  return (
    <>
      <PageSeo
        title={t.seo.privacy.title}
        description={t.seo.privacy.description}
        path="/privacy"
        language={language}
      />
      <LegalPageLayout
        title={t.privacy.title}
        lastUpdated={t.privacy.lastUpdated}
        sections={t.privacy.sections}
        backLabel={t.privacy.backHome}
      />
    </>
  );
}
