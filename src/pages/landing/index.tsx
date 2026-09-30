import { LandingFooter } from '../../components/landing/LandingFooter'
import { LandingHeader } from '../../components/landing/LandingHeader'
import {
  BusinessProblemSection,
  BusinessPulseSection,
  DecisionProcessSection,
} from '../../features/landing/components/BusinessSections'
import {
  FinalCallToAction,
  PricingSection,
} from '../../features/landing/components/ClosingSections'
import {
  GrowthSection,
  IndustrySection,
  MultiBranchSection,
  PermissionsSection,
  PlatformArchitectureSection,
  SecuritySection,
} from '../../features/landing/components/GrowthSections'
import {
  ActionCenterSection,
  AiAnalystSection,
  AnomalyDetectionSection,
  DailyBriefSection,
  RecommendationSection,
} from '../../features/landing/components/IntelligenceSections'
import {
  HeroSection,
  TrustStrip,
} from '../../features/landing/components/HeroSections'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <LandingHeader />
      <main>
        <HeroSection />
        <TrustStrip />
        <BusinessProblemSection />
        <DecisionProcessSection />
        <BusinessPulseSection />
        <DailyBriefSection />
        <AnomalyDetectionSection />
        <RecommendationSection />
        <ActionCenterSection />
        <IndustrySection />
        <GrowthSection />
        <MultiBranchSection />
        <PermissionsSection />
        <PlatformArchitectureSection />
        <SecuritySection />
        <PricingSection />
        <FinalCallToAction />
      </main>
      <LandingFooter />
    </div>
  )
}
