import { PageSeo } from "../../components/PageSeo";
import { useLanguage } from "../../i18n/LanguageContext";
import { localizePathname } from "../../lib/languagePath";
import { LegalPageLayout } from "../components/cristina/LegalPageLayout";

export function PrivacyPage() {
  const { language, t } = useLanguage();

  return (
    <>
      <PageSeo
        title={t.seo.privacy.title}
        description={t.seo.privacy.description}
        path={localizePathname("/privacy", language)}
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
