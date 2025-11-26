import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const news = [
    {
      id: 1,
      title: "Новый игрок в составе",
      date: "10 ноября 2024",
      description: "Рады приветствовать нового участника команды! Встречайте профессионального игрока с опытом более 3 лет",
      category: "Состав"
    },
    {
      id: 2,
      title: "Тренировочный буткемп",
      date: "5 ноября 2024",
      description: "Команда провела интенсивный тренировочный лагерь, отрабатывая новые стратегии и тактики игры",
      category: "Тренировки"
    }
  ];

  const achievements = [
    { icon: "Trophy", text: "Пока что тут ничего" },
    { icon: "Target", text: "Клан постоянно развивается" },
    { icon: "Award", text: "Пока что тут ничего" },
    { icon: "Users", text: "Профессиональный состав" }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none"
      />
      
      <div className="relative z-10">
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-600/20">
          <div className="container mx-auto px-4 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center font-bold text-2xl">
                Z
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wider">Z-LEGION</h1>
                <p className="text-xs text-red-500">STANDOFF 2 TEAM</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#about" className="hover:text-red-500 transition-colors">О команде</a>
              <a href="#news" className="hover:text-red-500 transition-colors">Новости</a>
              <Button 
                className="bg-red-600 hover:bg-red-700 text-white"
                onClick={() => window.open('https://t.me/zarastand2', '_blank')}
              >
                <Icon name="Send" size={16} className="mr-2" />
                Telegram
              </Button>
            </nav>
          </div>
        </header>

        <section className="relative pt-32 pb-20 overflow-hidden">
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url('https://cdn.poehali.dev/projects/c59a8e30-bbe1-4978-92e0-7c98625f5d22/files/56a679de-d8de-4a72-96eb-84db1ba5645c.jpg')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              filter: 'brightness(0.4)'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <img 
                src="https://cdn.poehali.dev/files/eeda75c1-3683-4f05-944c-f5b8055508b4.png"
                alt="Z-LEGION Logo"
                className="w-48 h-48 mx-auto rounded-full shadow-2xl shadow-red-600/50 hover:scale-105 transition-transform duration-300"
              />
              <h2 className="text-6xl md:text-8xl font-bold text-glow-red">
                Z-LEGION
              </h2>
              <p className="text-2xl md:text-3xl text-red-500 font-semibold tracking-wider">
                STANDOFF 2 ESPORTS TEAM
              </p>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Профессиональная киберспортивная команда. Стремимся к победам, совершенствуем мастерство, доминируем на турнирах.
              </p>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <Button 
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8"
                  onClick={() => window.open('https://t.me/zarastand2', '_blank')}
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Присоединиться к каналу
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  className="border-red-600 text-red-500 hover:bg-red-600/10"
                  onClick={() => document.getElementById('news')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Newspaper" size={20} className="mr-2" />
                  Наши новости
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gradient-to-b from-black to-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-red-600/20 text-red-500 border-red-600">О команде</Badge>
              <h3 className="text-5xl font-bold mb-4">Кто мы такие</h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Z-LEGION — это команда профессиональных игроков Standoff 2, объединенных стремлением к победе и постоянному развитию
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {achievements.map((achievement, index) => (
                <Card 
                  key={index}
                  className="p-6 bg-zinc-900 border-red-600/20 hover:border-red-600 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-red-600/20 group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex flex-col items-center text-center space-y-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon name={achievement.icon as any} size={32} />
                    </div>
                    <p className="text-lg font-semibold">{achievement.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="news" className="py-20 bg-zinc-950">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-red-600/20 text-red-500 border-red-600">Новости</Badge>
              <h3 className="text-5xl font-bold mb-4">Последние события</h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Следите за нашими достижениями, обновлениями состава и предстоящими турнирами
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {news.map((item, index) => (
                <Card 
                  key={item.id}
                  className="bg-zinc-900 border-red-600/20 hover:border-red-600 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-red-600/20 overflow-hidden group animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="h-2 bg-gradient-to-r from-red-600 to-red-900" />
                  <div className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="border-red-600/50 text-red-500">
                        {item.category}
                      </Badge>
                      <div className="flex items-center text-sm text-gray-500">
                        <Icon name="Calendar" size={14} className="mr-1" />
                        {item.date}
                      </div>
                    </div>
                    <h4 className="text-2xl font-bold group-hover:text-red-500 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button 
                size="lg"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold px-8"
                onClick={() => window.open('https://t.me/zarastand2', '_blank')}
              >
                <Icon name="ArrowRight" size={20} className="mr-2" />
                Все новости в Telegram
              </Button>
            </div>
          </div>
        </section>

        <footer className="py-12 bg-black border-t border-red-600/20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center font-bold text-xl">
                  Z
                </div>
                <div>
                  <p className="font-bold">Z-LEGION</p>
                  <p className="text-sm text-gray-500">Standoff 2 Esports</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="hover:bg-red-600/20 hover:text-red-500"
                  onClick={() => window.open('https://t.me/zarastand2', '_blank')}
                >
                  <Icon name="Send" size={20} />
                </Button>
              </div>
              
              <p className="text-sm text-gray-500">
                © 2025 Z-LEGION. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;