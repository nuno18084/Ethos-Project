import { useLanguage } from "../../i18n/LanguageContext";
import { LegalPageLayout } from "../components/cristina/LegalPageLayout";

export function TermsPage() {
  const { t } = useLanguage();

  return (
    <LegalPageLayout
      title={t.terms.title}
      lastUpdated={t.terms.lastUpdated}
      sections={t.terms.sections}
      backLabel={t.terms.backHome}
    />
  );
}
