import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

export default function EditorFeatures() {
  const features = [
    {
      icon: "Box",
      title: "2D/3D Редактор",
      description: "Работайте с 2D спрайтами и 3D моделями в одном интерфейсе",
      tags: ["2D", "3D", "Модели"],
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      icon: "Zap",
      title: "Физический движок",
      description:
        "Реалистичная физика: гравитация, коллизии, динамика твердых тел",
      tags: ["Физика", "Коллизии", "Гравитация"],
      color: "from-yellow-500/20 to-orange-500/20",
    },
    {
      icon: "Play",
      title: "Анимации",
      description: "Создавайте плавные анимации персонажей и объектов",
      tags: ["Анимации", "Переходы", "Ключевые кадры"],
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      icon: "Blocks",
      title: "Визуальное программирование",
      description: "Создавайте логику игры с помощью блоков без кода",
      tags: ["Блоки", "Логика", "No-code"],
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      icon: "Layers",
      title: "Система сцен",
      description: "Управляйте уровнями, меню и переходами между сценами",
      tags: ["Сцены", "Уровни", "Переходы"],
      color: "from-red-500/20 to-rose-500/20",
    },
    {
      icon: "Palette",
      title: "Редактор материалов",
      description: "Создавайте уникальные материалы и шейдеры для объектов",
      tags: ["Материалы", "Шейдеры", "Текстуры"],
      color: "from-indigo-500/20 to-violet-500/20",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4 px-4 py-2">
            <Icon name="Wrench" size={16} className="mr-2" />
            Инструменты разработки
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Всё для создания игр
            <br />
            <span className="text-primary">в одном месте</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            От простых 2D-платформеров до сложных 3D-миров — наш конструктор
            подходит для любых проектов
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <CardContent className="relative p-6">
                <div className="mb-4">
                  <Icon
                    name={feature.icon as any}
                    size={40}
                    className="text-primary mb-3"
                  />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {feature.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="outline"
                      className="text-xs px-2 py-1 bg-background/50"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Learning section */}
        <div className="bg-gradient-to-r from-primary/10 via-transparent to-secondary/10 rounded-2xl p-8 md:p-12 text-center">
          <Icon
            name="GraduationCap"
            size={64}
            className="text-primary mb-6 mx-auto"
          />
          <h3 className="text-3xl font-bold mb-4">Обучение и поддержка</h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Пошаговые туториалы, видеоуроки и активное сообщество помогут
            освоить создание игр с нуля
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="outline"
              className="transition-all duration-200 hover:scale-105"
            >
              <Icon name="Play" size={18} className="mr-2" />
              Видеоуроки
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transition-all duration-200 hover:scale-105"
            >
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Сообщество
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="transition-all duration-200 hover:scale-105"
            >
              <Icon name="FileText" size={18} className="mr-2" />
              Документация
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
