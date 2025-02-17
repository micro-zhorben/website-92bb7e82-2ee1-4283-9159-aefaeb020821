import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Typography } from "@/components/ui/typography";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "张明",
    role: "健身爱好者",
    content: "这款应用帮助我建立了规律的运动习惯，界面简洁，功能强大。",
    rating: 5,
  },
  {
    name: "李华",
    role: "马拉松跑者",
    content: "作为跑步爱好者，这款应用的数据追踪功能非常准确，给我很大帮助。",
    rating: 5,
  },
  {
    name: "王芳",
    role: "瑜伽教练",
    content: "推荐给我的学员使用，帮助他们更好地追踪训练进度。",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-16 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <Typography.H2>用户反馈</Typography.H2>
          <Typography.Lead className="mt-4">
            听听我们用户的真实体验
          </Typography.Lead>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="border-2">
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="flex flex-col">
                  <Typography.H4>{testimonial.name}</Typography.H4>
                  <Typography.Small className="text-muted-foreground">
                    {testimonial.role}
                  </Typography.Small>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="size-4 fill-accent text-accent"
                    />
                  ))}
                </div>
                <Typography.P className="mt-4">{testimonial.content}</Typography.P>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}