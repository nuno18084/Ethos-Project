import { PageSeo } from "../../components/PageSeo";
import { useLanguage } from "../../i18n/LanguageContext";
import { localizePathname } from "../../lib/languagePath";
import { LegalPageLayout } from "../components/cristina/LegalPageLayout";

export function TermsPage() {
  const { language, t } = useLanguage();

  return (
    <>
      <PageSeo
        title={t.seo.terms.title}
        description={t.seo.terms.description}
        path={localizePathname("/terms", language)}
        language={language}
      />
      <LegalPageLayout
        title={t.terms.title}
        lastUpdated={t.terms.lastUpdated}
        sections={t.terms.sections}
        backLabel={t.terms.backHome}
      />
    </>
  );
}
