import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { Download } from "lucide-react";

export function CTASection() {
  return (
    <section className="bg-primary px-4 py-16 text-primary-foreground md:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <Typography.H2 className="text-primary-foreground">
          开始你的健身之旅
        </Typography.H2>
        <Typography.Lead className="mt-4 text-primary-foreground/90">
          立即下载应用，加入数百万用户的健身社区
        </Typography.Lead>
        <Button
          size="lg"
          variant="secondary"
          className="mt-8 gap-2"
        >
          <Download className="text-secondary-foreground" />
          免费下载
        </Button>
      </div>
    </section>
  );
}