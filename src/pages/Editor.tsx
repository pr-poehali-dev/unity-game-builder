import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useState } from "react";

export default function Editor() {
  const [selectedTool, setSelectedTool] = useState("move");
  const [selectedObject, setSelectedObject] = useState(null);

  const tools = [
    { id: "move", icon: "Move", name: "Перемещение" },
    { id: "rotate", icon: "RotateCw", name: "Поворот" },
    { id: "scale", icon: "Maximize2", name: "Масштаб" },
    { id: "brush", icon: "Paintbrush", name: "Кисть" },
    { id: "eraser", icon: "Eraser", name: "Ластик" },
  ];

  const gameObjects = [
    { id: 1, name: "Player", type: "Character", icon: "User" },
    { id: 2, name: "Platform", type: "Static", icon: "Square" },
    { id: 3, name: "Enemy", type: "AI", icon: "Zap" },
    { id: 4, name: "Coin", type: "Collectible", icon: "Coins" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="/">
                <Icon name="ArrowLeft" size={18} className="mr-2" />
                Назад
              </a>
            </Button>
            <h1 className="text-xl font-semibold">Unity Game Builder</h1>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">
              <Icon name="Play" size={16} className="mr-2" />
              Запустить
            </Button>
            <Button size="sm">
              <Icon name="Save" size={16} className="mr-2" />
              Сохранить
            </Button>
          </div>
        </div>
      </header>

      <div className="flex h-[calc(100vh-73px)]">
        {/* Left Sidebar - Tools */}
        <div className="w-16 bg-muted/30 border-r flex flex-col items-center py-4 gap-2">
          {tools.map((tool) => (
            <Button
              key={tool.id}
              variant={selectedTool === tool.id ? "default" : "ghost"}
              size="sm"
              className="w-10 h-10 p-0"
              onClick={() => setSelectedTool(tool.id)}
              title={tool.name}
            >
              <Icon name={tool.icon as any} size={18} />
            </Button>
          ))}
        </div>

        {/* Main Editor Area */}
        <div className="flex-1 bg-gradient-to-br from-slate-900 to-slate-800 relative overflow-hidden">
          {/* Grid Background */}
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />

          {/* Game Scene */}
          <div className="relative h-full flex items-center justify-center">
            <div className="relative">
              {/* Sample Game Objects */}
              <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center cursor-pointer hover:scale-110 transition-transform absolute -top-8 -left-8">
                <Icon name="User" size={24} className="text-white" />
              </div>
              <div className="w-32 h-4 bg-green-600 rounded cursor-pointer hover:scale-105 transition-transform absolute top-8 -left-16" />
              <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform absolute -top-6 left-20">
                <Icon name="Zap" size={16} className="text-white" />
              </div>
              <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform absolute top-2 left-32">
                <Icon name="Coins" size={12} className="text-yellow-800" />
              </div>
            </div>

            {/* Center indicator */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white/50 rounded-full" />
          </div>

          {/* View Controls */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button variant="secondary" size="sm">
              <Icon name="ZoomIn" size={16} />
            </Button>
            <Button variant="secondary" size="sm">
              <Icon name="ZoomOut" size={16} />
            </Button>
            <Button variant="secondary" size="sm">
              <Icon name="RotateCcw" size={16} />
            </Button>
          </div>
        </div>

        {/* Right Sidebar - Properties */}
        <div className="w-80 bg-background border-l flex flex-col">
          {/* Scene Hierarchy */}
          <Card className="m-4 mb-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center">
                <Icon name="Layers" size={16} className="mr-2" />
                Иерархия сцены
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {gameObjects.map((obj) => (
                <div
                  key={obj.id}
                  className={`flex items-center gap-2 p-2 rounded cursor-pointer transition-colors ${
                    selectedObject === obj.id
                      ? "bg-primary/10 text-primary"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedObject(obj.id)}
                >
                  <Icon name={obj.icon as any} size={16} />
                  <span className="text-sm font-medium">{obj.name}</span>
                  <Badge variant="secondary" className="text-xs ml-auto">
                    {obj.type}
                  </Badge>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Properties Panel */}
          <Card className="m-4 mt-2 flex-1">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center">
                <Icon name="Settings" size={16} className="mr-2" />
                Свойства объекта
              </CardTitle>
            </CardHeader>
            <CardContent>
              {selectedObject ? (
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Позиция
                    </label>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      <input
                        className="px-2 py-1 text-xs border rounded"
                        placeholder="X"
                        defaultValue="0"
                      />
                      <input
                        className="px-2 py-1 text-xs border rounded"
                        placeholder="Y"
                        defaultValue="0"
                      />
                      <input
                        className="px-2 py-1 text-xs border rounded"
                        placeholder="Z"
                        defaultValue="0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Поворот
                    </label>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      <input
                        className="px-2 py-1 text-xs border rounded"
                        placeholder="X"
                        defaultValue="0"
                      />
                      <input
                        className="px-2 py-1 text-xs border rounded"
                        placeholder="Y"
                        defaultValue="0"
                      />
                      <input
                        className="px-2 py-1 text-xs border rounded"
                        placeholder="Z"
                        defaultValue="0"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">
                      Масштаб
                    </label>
                    <div className="grid grid-cols-3 gap-2 mt-1">
                      <input
                        className="px-2 py-1 text-xs border rounded"
                        placeholder="X"
                        defaultValue="1"
                      />
                      <input
                        className="px-2 py-1 text-xs border rounded"
                        placeholder="Y"
                        defaultValue="1"
                      />
                      <input
                        className="px-2 py-1 text-xs border rounded"
                        placeholder="Z"
                        defaultValue="1"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                <p className="text-sm text-muted-foreground">
                  Выберите объект для редактирования
                </p>
              )}
            </CardContent>
          </Card>

          {/* Asset Library */}
          <Card className="m-4 mt-2">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm flex items-center">
                <Icon name="Package" size={16} className="mr-2" />
                Библиотека ресурсов
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-4 gap-2">
                {["Cube", "Sphere", "Cylinder", "Plane"].map((shape) => (
                  <div
                    key={shape}
                    className="aspect-square bg-muted rounded cursor-pointer hover:bg-muted/80 flex items-center justify-center text-xs font-medium transition-colors"
                  >
                    {shape}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
