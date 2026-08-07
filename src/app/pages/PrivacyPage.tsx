import { useLanguage } from "../../i18n/LanguageContext";
import { LegalPageLayout } from "../components/cristina/LegalPageLayout";

export function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <LegalPageLayout
      title={t.privacy.title}
      lastUpdated={t.privacy.lastUpdated}
      sections={t.privacy.sections}
      backLabel={t.privacy.backHome}
    />
  );
}
