import { BasicPlan } from "./basic-plan"
import ProPlan from "./pro-plan"
import EnterprisePlan from "./enterprise-plan"

export default function Pricing() {
  return (
    <section className="mt-10 mb-20 w-full flex items-center justify-center">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-3 md:gap-8">
          <BasicPlan />
          <ProPlan />
          <EnterprisePlan />
        </div>
      </div>
    </section>
  )
}