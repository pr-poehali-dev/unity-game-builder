import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

export default function GameBuilderHero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-background to-muted/20 flex items-center justify-center overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-2 h-2 bg-primary rounded-full animate-pulse" />
        <div className="absolute top-40 right-32 w-1 h-1 bg-secondary rounded-full animate-pulse delay-1000" />
        <div className="absolute bottom-32 left-1/3 w-1.5 h-1.5 bg-primary/60 rounded-full animate-pulse delay-2000" />
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-accent rounded-full animate-pulse delay-3000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <Badge
            variant="secondary"
            className="mb-6 px-4 py-2 text-sm font-medium"
          >
            <Icon name="Gamepad2" size={16} className="mr-2" />
            Конструктор игр нового поколения
          </Badge>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-secondary bg-clip-text text-transparent leading-tight">
            Unity Game
            <br />
            <span className="text-primary">Builder</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Создавайте игры мечты с помощью визуального редактора сцен, системы
            скриптинга и мощных инструментов для 2D/3D разработки
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
              asChild
            >
              <a href="/editor">
                <Icon name="Play" size={20} className="mr-2" />
                Начать создавать
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-4 text-lg font-medium transition-all duration-200 hover:scale-105"
            >
              <Icon name="BookOpen" size={20} className="mr-2" />
              Обучение
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 transition-all duration-200 hover:scale-105 hover:bg-card/70">
              <Icon
                name="Layers3"
                size={32}
                className="text-primary mb-3 mx-auto"
              />
              <h3 className="font-semibold text-lg mb-2">
                Визуальный редактор
              </h3>
              <p className="text-muted-foreground text-sm">
                Drag & drop сцены и объекты
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 transition-all duration-200 hover:scale-105 hover:bg-card/70">
              <Icon
                name="Code2"
                size={32}
                className="text-primary mb-3 mx-auto"
              />
              <h3 className="font-semibold text-lg mb-2">Система скриптинга</h3>
              <p className="text-muted-foreground text-sm">
                Логика игры без программирования
              </p>
            </div>
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 transition-all duration-200 hover:scale-105 hover:bg-card/70">
              <Icon
                name="Zap"
                size={32}
                className="text-primary mb-3 mx-auto"
              />
              <h3 className="font-semibold text-lg mb-2">Физика и анимации</h3>
              <p className="text-muted-foreground text-sm">
                Реалистичные взаимодействия
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
