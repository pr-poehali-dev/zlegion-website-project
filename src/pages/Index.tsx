import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const news: any[] = [];

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
              <a href="#recruit" className="hover:text-red-500 transition-colors">Набор</a>
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
                  onClick={() => document.getElementById('recruit')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="UserPlus" size={20} className="mr-2" />
                  Присоединиться
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

            <div className="max-w-2xl mx-auto">
              <Card className="bg-zinc-900 border-red-600/20 p-12">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center mx-auto">
                    <Icon name="Info" size={40} />
                  </div>
                  <h4 className="text-3xl font-bold text-gray-400">Пока что тут ничего</h4>
                  <p className="text-gray-500">Следите за обновлениями в нашем Telegram-канале</p>
                </div>
              </Card>
            </div>


          </div>
        </section>

        <section id="recruit" className="py-20 bg-black">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in">
              <Badge className="mb-4 bg-red-600/20 text-red-500 border-red-600">Набор игроков</Badge>
              <h3 className="text-5xl font-bold mb-4">Присоединяйся к команде</h3>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Мы ищем талантливых игроков в Standoff 2. Если ты готов стать частью Z-LEGION, свяжись с нами!
              </p>
            </div>

            <Card className="max-w-2xl mx-auto bg-zinc-900 border-red-600/20 overflow-hidden">
              <div className="h-2 bg-gradient-to-r from-red-600 to-red-900" />
              <div className="p-8 space-y-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Send" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">Шаг 1: Свяжись в Telegram</h4>
                      <p className="text-gray-400 mb-3">Напиши нам в Telegram для начала процесса отбора</p>
                      <Button 
                        className="bg-red-600 hover:bg-red-700 text-white font-semibold"
                        onClick={() => window.open('https://t.me/DikiZara457', '_blank')}
                      >
                        <Icon name="Send" size={16} className="mr-2" />
                        @DikiZara457
                      </Button>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="User" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">Шаг 2: Укажи свой игровой ID</h4>
                      <p className="text-gray-400">Отправь свой игровой ID из Standoff 2, чтобы мы могли оценить твои навыки</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-red-600 to-red-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name="Zap" size={24} />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold mb-2">Шаг 3: Пройди отбор</h4>
                      <p className="text-gray-400">Мы рассмотрим твою заявку и проведем тестовую игру</p>
                    </div>
                  </div>
                </div>

                <div className="bg-black/50 rounded-lg p-6 border border-red-600/20">
                  <h5 className="font-bold text-lg mb-3 flex items-center gap-2">
                    <Icon name="Star" size={20} className="text-red-500" />
                    Требования к игрокам:
                  </h5>
                  <ul className="space-y-2 text-gray-400">
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-red-500 flex-shrink-0" />
                      Опыт игры в Standoff 2
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-red-500 flex-shrink-0" />
                      Командный игрок
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-red-500 flex-shrink-0" />
                      Желание развиваться и побеждать
                    </li>
                    <li className="flex items-center gap-2">
                      <Icon name="Check" size={16} className="text-red-500 flex-shrink-0" />
                      Регулярное участие в тренировках
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
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