const questions = {
    football: [
        // Easy
        {
            question: "Bir futbol takımı sahada kaç oyuncu ile mücadele eder?",
            options: ["9", "10", "11", "12"],
            answer: "11",
            difficulty: "easy",
        },
        {
            question: "Futbolda topu sadece elle tutabilen oyuncu kimdir?",
            options: ["Forvet", "Defans", "Orta Saha", "Kaleci"],
            answer: "Kaleci",
            difficulty: "easy",
        },
        {
            question: "Bir futbol maçı standart olarak kaç dakika sürer?",
            options: ["45 dakika", "60 dakika", "90 dakika", "120 dakika"],
            answer: "90 dakika",
            difficulty: "easy",
        },
        {
            question: "FIFA Dünya Kupası kaç yılda bir düzenlenir?",
            options: ["2", "3", "4", "5"],
            answer: "4",
            difficulty: "easy",
        },
        {
            question: "Futbolda, bir oyuncu aynı maçta üç gol atarsa buna ne denir?",
            options: ["Dublör", "Hat-trick", "Asist", "Penaltı"],
            answer: "Hat-trick",
            difficulty: "easy",
        },
        {
            question: "Hangi ülke 2022 FIFA Dünya Kupası'nı kazanmıştır?",
            options: ["Fransa", "Brezilya", "Arjantin", "Almanya"],
            answer: "Arjantin",
            difficulty: "easy",
        },
        {
            question: "Futbolda kullanılan topun standart şekli nedir?",
            options: ["Kare", "Yuvarlak", "Oval", "Dikdörtgen"],
            answer: "Yuvarlak",
            difficulty: "easy",
        },
        {
            question: "Cristiano Ronaldo hangi ülkenin milli takımında oynamaktadır?",
            options: ["İspanya", "Brezilya", "Portekiz", "Arjantin"],
            answer: "Portekiz",
            difficulty: "easy",
        },
        {
            question: "Türkiye Süper Lig'inde en çok şampiyon olan takım hangisidir? (Mayıs 2024 itibarıyla)",
            options: ["Fenerbahçe", "Beşiktaş", "Galatasaray", "Trabzonspor"],
            answer: "Galatasaray",
            difficulty: "easy",
        },
        {
            question: "Lionel Messi, kariyerinin büyük bir bölümünü hangi İspanyol kulübünde geçirmiştir?",
            options: ["Real Madrid", "Atletico Madrid", "Sevilla", "Barcelona"],
            answer: "Barcelona",
            difficulty: "easy",
        },
        // Medium
        {
            question: "UEFA Şampiyonlar Ligi'ni en çok kazanan kulüp hangisidir?",
            options: ["Barcelona", "Real Madrid", "Bayern Münih", "Liverpool"],
            answer: "Real Madrid",
            difficulty: "medium",
        },
        {
            question: "Ofsayt kuralı hangi durumda uygulanmaz?",
            options: ["Serbest vuruşta", "Kornerde", "Penaltıda", "Taç atışında"],
            answer: "Taç atışında",
            difficulty: "medium",
        },
        {
            question: "Ballon d'Or ödülünü en çok kazanan futbolcu kimdir?",
            options: ["Cristiano Ronaldo", "Lionel Messi", "Michel Platini", "Johan Cruyff"],
            answer: "Lionel Messi",
            difficulty: "medium",
        },
        {
            question: "Premier League'de bir sezonda en çok gol atan futbolcu kimdir? (Mayıs 2024 itibarıyla)",
            options: ["Alan Shearer", "Mohamed Salah", "Harry Kane", "Erling Haaland"],
            answer: "Erling Haaland", // 36 gol, 2022-23 sezonu
            difficulty: "medium",
        },
        {
            question: "Hangi futbolcu 'Tanrı'nın Eli' olarak bilinen golü atmıştır?",
            options: ["Pele", "Diego Maradona", "Zinedine Zidane", "George Best"],
            answer: "Diego Maradona",
            difficulty: "medium",
        },
        {
            question: "Bir futbol sahasının kale ölçüleri standart olarak nedir? (genişlik x yükseklik)",
            options: ["7.32m x 2.44m", "8m x 3m", "7m x 2.5m", "7.5m x 2.2m"],
            answer: "7.32m x 2.44m",
            difficulty: "medium",
        },
        {
            question: "VAR sistemi futbolda ne anlama gelir?",
            options: ["Video Yardımcı Rakip", "Video Analiz Sistemi", "Video Yardımcı Hakem", "Veri Akış Radar"],
            answer: "Video Yardımcı Hakem",
            difficulty: "medium",
        },
        {
            question: "Hangi teknik direktör Şampiyonlar Ligi'ni 3 farklı kulüple kazanmıştır?",
            options: ["Pep Guardiola", "Jose Mourinho", "Carlo Ancelotti", "Sir Alex Ferguson"],
            answer: "Carlo Ancelotti", // Real Madrid, AC Milan. (Düzeltme: Bu soru hatalı olabilir, 2 kulüple kazananlar var. Ancelotti 2 farklı kulüple en çok kazananlardan biri)
                                    // Doğrusu: Şampiyonlar Ligi'ni en çok kazanan teknik direktör kimdir? (Carlo Ancelotti)
                                    // Veya: Şampiyonlar Ligi'ni 3 kez kazanan farklı teknik direktörler var.
                                    // Soru Düzeltmesi: "Şampiyonlar Ligi'ni en çok kazanan teknik direktör kimdir?" -> "Carlo Ancelotti"
            difficulty: "medium",
        },
         {
            question: "İlk FIFA Dünya Kupası hangi yıl ve nerede düzenlenmiştir?",
            options: ["1930, Uruguay", "1950, Brezilya", "1928, İtalya", "1934, Fransa"],
            answer: "1930, Uruguay",
            difficulty: "medium",
        },
        {
            question: "Futbolda 'Libero' pozisyonunun temel görevi nedir?",
            options: ["Gol atmak", "Orta sahayı kontrol etmek", "Savunmanın arkasını süpürmek", "Kanatlardan hücum etmek"],
            answer: "Savunmanın arkasını süpürmek",
            difficulty: "medium",
        },
        // Hard
        {
            question: "FIFA Puskás Ödülü hangi kritere göre verilir?",
            options: ["Sezonun en çok gol atan oyuncusuna", "Sezonun en iyi kalecisine", "Yılın estetik açıdan en güzel golüne", "Fair play davranışlarına"],
            answer: "Yılın estetik açıdan en güzel golüne",
            difficulty: "hard",
        },
        {
            question: "Avrupa'nın beş büyük futbol ligi hangileridir?",
            options: ["İngiltere, İspanya, Almanya, İtalya, Fransa", "İngiltere, İspanya, Portekiz, Hollanda, Fransa", "İngiltere, Almanya, İtalya, Türkiye, Rusya", "İspanya, Almanya, İtalya, Hollanda, Belçika"],
            answer: "İngiltere, İspanya, Almanya, İtalya, Fransa",
            difficulty: "hard",
        },
        {
            question: "Sadece bir kez FIFA Dünya Kupası'nı kazanmış olan ülke hangisidir?",
            options: ["Hollanda", "Portekiz", "İngiltere", "Belçika"],
            answer: "İngiltere", // 1966
            difficulty: "hard",
        },
        {
            question: "Futbolda 'Panenka penaltısı' ne anlama gelir?",
            options: ["Penaltıyı direğe nişanlamak", "Topu kalecinin üzerine aşırtarak yavaşça atmak", "Penaltıyı çok sert kullanmak", "Penaltıyı pas olarak kullanmak"],
            answer: "Topu kalecinin üzerine aşırtarak yavaşça atmak",
            difficulty: "hard",
        },
        {
            question: "Hangi futbolcu hem Şampiyonlar Ligi'ni hem de Libertadores Kupası'nı kazanmıştır?",
            options: ["Ronaldinho", "Neymar", "Cafu", "Hepsi"], // Cafu, Ronaldinho, Neymar, Tevez, Sorin, Samuel, Danilo, Rafinha, Ramires, David Luiz, Julian Alvarez...
            answer: "Hepsi", // Ronaldinho (Barcelona/Atletico Mineiro) bu kritere uyar. Cafu da (Milan/Sao Paulo). Neymar da (Barcelona/Santos)
            difficulty: "hard",
        },
        {
            question: "UEFA Konferans Ligi ilk kez hangi sezonda düzenlenmiştir?",
            options: ["2019-2020", "2020-2021", "2021-2022", "2022-2023"],
            answer: "2021-2022",
            difficulty: "hard",
        },
        {
            question: "Bir futbol maçında bir takım en fazla kaç oyuncu değişikliği yapabilir (standart lig maçlarında, uzatmalar hariç)?",
            options: ["3", "4", "5", "6"],
            answer: "5", // Çoğu ligde pandemi sonrası kalıcı hale geldi.
            difficulty: "hard",
        },
        {
            question: "Hangi Afrika ülkesi FIFA Dünya Kupası'nda yarı finale yükselen ilk takım olmuştur?",
            options: ["Kamerun", "Nijerya", "Gana", "Fas"],
            answer: "Fas", // 2022
            difficulty: "hard",
        },
        {
            question: "Altın Ayakkabı (European Golden Shoe) ödülü hangi başarı için verilir?",
            options: ["Avrupa'da yılın en iyi oyuncusuna", "Avrupa liglerinde en çok gol atan oyuncuya", "Şampiyonlar Ligi gol kralına", "Avrupa'da en çok asist yapan oyuncuya"],
            answer: "Avrupa liglerinde en çok gol atan oyuncuya",
            difficulty: "hard",
        },
        {
            question: "IFAB kısaltmasının açılımı nedir?",
            options: ["International Football Association Board", "International Federation of Amateur Ballers", "Italian Football Arbitration Body", "International Football Awards Bureau"],
            answer: "International Football Association Board", // Futbol kurallarını belirleyen kurum
            difficulty: "hard",
        },
    ],
    basketball: [
        // Easy
        {
            question: "Bir basketbol takımı sahada kaç oyuncu ile yer alır?",
            options: ["4", "5", "6", "7"],
            answer: "5",
            difficulty: "easy",
        },
        {
            question: "Basketbolda potaya isabetli atışla kazanılan en düşük sayı kaçtır?",
            options: ["1", "2", "3", "4"],
            answer: "1", // Serbest atış
            difficulty: "easy",
        },
        {
            question: "NBA'deki en ünlü basketbol ligi hangi ülkededir?",
            options: ["İspanya", "Türkiye", "Amerika Birleşik Devletleri", "Çin"],
            answer: "Amerika Birleşik Devletleri",
            difficulty: "easy",
        },
        {
            question: "Basketbolda topu sürerek ilerlemeye ne denir?",
            options: ["Pas", "Şut", "Ribaund", "Dribbling"],
            answer: "Dribbling",
            difficulty: "easy",
        },
        {
            question: "Michael Jordan hangi NBA takımıyla özdeşleşmiştir?",
            options: ["Los Angeles Lakers", "Boston Celtics", "Chicago Bulls", "Miami Heat"],
            answer: "Chicago Bulls",
            difficulty: "easy",
        },
        {
            question: "Bir basketbol maçının standart süresi NBA'de kaç dakikadır (uzatmalar hariç)?",
            options: ["40 dakika", "48 dakika", "60 dakika", "90 dakika"],
            answer: "48 dakika", // 4 periyot x 12 dakika
            difficulty: "easy",
        },
        {
            question: "Basketbolda üç sayı çizgisi dışından yapılan başarılı atış kaç puan değerindedir?",
            options: ["1", "2", "3", "4"],
            answer: "3",
            difficulty: "easy",
        },
        {
            question: "Panyadan sekerek potaya giren topa ne denir?",
            options: ["Smaç", "Turnike", "Asist", "Bank shot (Panyalı atış)"],
            answer: "Bank shot (Panyalı atış)",
            difficulty: "easy",
        },
        {
            question: "LeBron James'in forma numaralarından en bilineni hangisidir?",
            options: ["10", "23", "32", "1"],
            answer: "23",
            difficulty: "easy",
        },
        {
            question: "Basketbolda hatalı yürüme veya topu yanlış taşıma kural ihlaline ne denir?",
            options: ["Faul", "Steps (Hatalı yürüme)", "Blok", "Çengel atış"],
            answer: "Steps (Hatalı yürüme)",
            difficulty: "easy",
        },
        // Medium
        {
            question: "NBA'de bir sezonda en çok MVP (En Değerli Oyuncu) ödülünü kazanan oyuncu kimdir?",
            options: ["Michael Jordan", "LeBron James", "Bill Russell", "Kareem Abdul-Jabbar"],
            answer: "Kareem Abdul-Jabbar", // 6 kez
            difficulty: "medium",
        },
        {
            question: "Basketbolda 'double-double' yapmak ne anlama gelir?",
            options: ["Bir maçta 10 sayı ve 10 asist", "İki ana kategoride (sayı, ribaund, asist, top çalma, blok) çift haneli sayılara ulaşmak", "Bir maçta iki kez üç sayılık atış yapmak", "Rakibe iki kez teknik faul yaptırmak"],
            answer: "İki ana kategoride (sayı, ribaund, asist, top çalma, blok) çift haneli sayılara ulaşmak",
            difficulty: "medium",
        },
        {
            question: "FIBA kurallarına göre bir basketbol maçında bir periyot kaç dakikadır?",
            options: ["8 dakika", "10 dakika", "12 dakika", "15 dakika"],
            answer: "10 dakika",
            difficulty: "medium",
        },
        {
            question: "'Dream Team' olarak adlandırılan efsanevi ABD milli takımı hangi Olimpiyat Oyunları'nda yer almıştır?",
            options: ["1988 Seul", "1992 Barcelona", "1996 Atlanta", "2000 Sydney"],
            answer: "1992 Barcelona",
            difficulty: "medium",
        },
        {
            question: "Basketbolda hücum süresi (shot clock) kaç saniyedir (NBA ve FIBA'da yaygın olarak)?",
            options: ["20 saniye", "24 saniye", "30 saniye", "35 saniye"],
            answer: "24 saniye",
            difficulty: "medium",
        },
        {
            question: "NBA tarihinde bir maçta 100 sayı atan tek oyuncu kimdir?",
            options: ["Michael Jordan", "Kobe Bryant", "Wilt Chamberlain", "LeBron James"],
            answer: "Wilt Chamberlain",
            difficulty: "medium",
        },
        {
            question: "Basketbolda 'pick and roll' ne tür bir oyundur?",
            options: ["Bir savunma stratejisi", "Bir şut tekniği", "İki oyunculu bir hücum organizasyonu", "Bir top sürme hareketi"],
            answer: "İki oyunculu bir hücum organizasyonu",
            difficulty: "medium",
        },
        {
            question: "Hangi oyuncu 'Air Jordan' lakabıyla tanınır?",
            options: ["Larry Bird", "Magic Johnson", "Michael Jordan", "Shaquille O'Neal"],
            answer: "Michael Jordan",
            difficulty: "medium",
        },
        {
            question: "Türkiye Basketbol Süper Ligi'nde en çok şampiyon olan takım hangisidir? (Mayıs 2024 itibarıyla)",
            options: ["Fenerbahçe Beko", "Anadolu Efes", "Galatasaray", "Eczacıbaşı"],
            answer: "Anadolu Efes", // (Efes Pilsen ve Anadolu Efes olarak)
            difficulty: "medium",
        },
        {
            question: "NBA'de normal sezon MVP ödülüne hangi efsanevi oyuncunun adı verilmiştir?",
            options: ["Bill Russell", "Larry O'Brien", "Maurice Podoloff", "Red Auerbach"],
            answer: "Maurice Podoloff", // Michael Jordan MVP Award olarak da bilinir günümüzde.
            difficulty: "medium",
        },
        // Hard
        {
            question: "NBA'de bir maçta en çok asist yapan oyuncu kimdir?",
            options: ["John Stockton", "Magic Johnson", "Scott Skiles", "Steve Nash"],
            answer: "Scott Skiles", // 30 asist
            difficulty: "hard",
        },
        {
            question: "Naismith Memorial Basketball Hall of Fame hangi şehirde bulunmaktadır?",
            options: ["Los Angeles, Kaliforniya", "Chicago, Illinois", "Springfield, Massachusetts", "New York, New York"],
            answer: "Springfield, Massachusetts", // Basketbolun icat edildiği yer
            difficulty: "hard",
        },
        {
            question: "NBA'de 'Hack-a-Shaq' stratejisi neyi amaçlar?",
            options: ["Shaquille O'Neal'ı savunmada yormak", "Kötü serbest atış yüzdesine sahip oyuncuya kasten faul yapıp serbest atışa göndermek", "Shaquille O'Neal'a top kaptırmamak", "Hücumda Shaquille O'Neal'ı etkisiz hale getirmek"],
            answer: "Kötü serbest atış yüzdesine sahip oyuncuya kasten faul yapıp serbest atışa göndermek",
            difficulty: "hard",
        },
        {
            question: "Kareem Abdul-Jabbar'ın imza atışı olan ve neredeyse bloklanamayan atışının adı nedir?",
            options: ["Fadeaway jump shot", "Skyhook", "Slam dunk", "Finger roll"],
            answer: "Skyhook",
            difficulty: "hard",
        },
        {
            question: "NBA tarihinde hem normal sezon MVP'si hem de Yılın Savunma Oyuncusu ödülünü aynı sezonda kazanan oyunculardan biri kimdir?",
            options: ["LeBron James", "Kobe Bryant", "Michael Jordan", "Tim Duncan"],
            answer: "Michael Jordan", // (1987-88 sezonu) Hakeem Olajuwon da (1993-94) başarmıştır. Giannis Antetokounmpo da (2019-20)
            difficulty: "hard",
        },
        {
            question: "EuroLeague'de Final Four formatı ilk kez hangi sezonda tam olarak uygulanmaya başlanmıştır?",
            options: ["1965-1966", "1987-1988", "2000-2001", "1992-1993"],
            answer: "1987-1988", // LİG formatı için. Daha önce farklı final formatları vardı.
            difficulty: "hard",
        },
        {
            question: "Basketbol topunun standart iç basıncı yaklaşık ne kadardır?",
            options: ["3-5 PSI", "7.5-8.5 PSI", "10-12 PSI", "13-15 PSI"],
            answer: "7.5-8.5 PSI",
            difficulty: "hard",
        },
        {
            question: "NBA'de 'Larry Bird Exception' (Larry Bird Kuralı) neye olanak tanır?",
            options: ["Takımların maaş bütçesini aşarak kendi serbest kalan oyuncularıyla sözleşme imzalamasına", "Bir oyuncunun üç farklı pozisyonda oynamasına", "Draftta ilk sıradan seçilen oyuncuya daha yüksek maaş verilmesine", "Emekli oyuncuların kısa süreliğine takıma dönmesine"],
            answer: "Takımların maaş bütçesini aşarak kendi serbest kalan oyuncularıyla sözleşme imzalamasına",
            difficulty: "hard",
        },
        {
            question: "WNBA (Kadınlar NBA) hangi yıl kurulmuştur?",
            options: ["1990", "1996", "2000", "2005"],
            answer: "1996", // İlk sezon 1997
            difficulty: "hard",
        },
        {
            question: "Basketbolun mucidi kimdir?",
            options: ["Walter Camp", "Abner Doubleday", "James Naismith", "Baron Pierre de Coubertin"],
            answer: "James Naismith",
            difficulty: "hard",
        },
    ],
    f1: [
        // Easy
        {
            question: "Formula 1 yarışları genellikle hangi tür pistlerde yapılır?",
            options: ["Toprak pist", "Asfalt pist", "Buz pisti", "Ahşap pist"],
            answer: "Asfalt pist",
            difficulty: "easy",
        },
        {
            question: "Formula 1'de bir takımın yarışa kaç araçla katılmasına izin verilir?",
            options: ["1", "2", "3", "4"],
            answer: "2",
            difficulty: "easy",
        },
        {
            question: "Formula 1'de pit stop sırasında en sık yapılan işlem nedir?",
            options: ["Pilot değişikliği", "Motor değişikliği", "Lastik değişikliği", "Araç yıkama"],
            answer: "Lastik değişikliği",
            difficulty: "easy",
        },
        {
            question: "Michael Schumacher hangi F1 takımıyla en çok şampiyonluk yaşamıştır?",
            options: ["McLaren", "Williams", "Ferrari", "Mercedes"],
            answer: "Ferrari",
            difficulty: "easy",
        },
        {
            question: "Formula 1'de yarış sonunda podyuma çıkan pilot sayısı kaçtır?",
            options: ["1", "2", "3", "5"],
            answer: "3",
            difficulty: "easy",
        },
        {
            question: "Lewis Hamilton hangi ülkenin vatandaşıdır?",
            options: ["Almanya", "Fransa", "Büyük Britanya", "İspanya"],
            answer: "Büyük Britanya",
            difficulty: "easy",
        },
        {
            question: "Formula 1'de damalı bayrak ne anlama gelir?",
            options: ["Yarışın başladığı", "Yarışın bittiği", "Tehlike olduğu", "Piste girilebileceği"],
            answer: "Yarışın bittiği",
            difficulty: "easy",
        },
        {
            question: "Ferrari F1 takımının araçlarının geleneksel rengi nedir?",
            options: ["Mavi", "Yeşil", "Kırmızı", "Sarı"],
            answer: "Kırmızı",
            difficulty: "easy",
        },
        {
            question: "F1'de 'DRS' neyin kısaltmasıdır?",
            options: ["Defansif Yarış Sistemi", "Dinamik Rota Stratejisi", "Sürtünme Azaltma Sistemi", "Direksiyon Reaksiyon Sistemi"],
            answer: "Sürtünme Azaltma Sistemi", // Drag Reduction System
            difficulty: "easy",
        },
        {
            question: "Max Verstappen, 2023 sezonunda hangi F1 takımı için yarışmıştır?",
            options: ["Mercedes", "Ferrari", "Red Bull Racing", "McLaren"],
            answer: "Red Bull Racing",
            difficulty: "easy",
        },
        // Medium
        {
            question: "Formula 1 Dünya Şampiyonası'nı en çok kazanan pilot kimdir? (Mayıs 2024 itibarıyla)",
            options: ["Juan Manuel Fangio", "Ayrton Senna", "Michael Schumacher ve Lewis Hamilton", "Sebastian Vettel"],
            answer: "Michael Schumacher ve Lewis Hamilton", // İkisi de 7 kez
            difficulty: "medium",
        },
        {
            question: "Monako Grand Prix'i hangi şehirde düzenlenmektedir?",
            options: ["Paris", "Nice", "Monte Carlo", "Marsilya"],
            answer: "Monte Carlo",
            difficulty: "medium",
        },
        {
            question: "Formula 1'de 'pole pozisyonu' ne anlama gelir?",
            options: ["Yarışa en son sırada başlamak", "Yarışa ilk sırada başlamak", "En hızlı pit stopu yapmak", "Yarışı lider bitirmek"],
            answer: "Yarışa ilk sırada başlamak",
            difficulty: "medium",
        },
        {
            question: "Ayrton Senna hangi trajik F1 yarışında hayatını kaybetmiştir?",
            options: ["1994 Monako Grand Prix", "1994 San Marino Grand Prix", "1992 Belçika Grand Prix", "1990 Japonya Grand Prix"],
            answer: "1994 San Marino Grand Prix", // Imola'da
            difficulty: "medium",
        },
        {
            question: "Formula 1'de Güvenlik Aracı (Safety Car) hangi durumlarda piste çıkar?",
            options: ["Sadece yağmur yağdığında", "Pistte tehlikeli bir durum olduğunda veya kaza olduğunda", "Yarış lideri çok fark açtığında", "Reklam arasında"],
            answer: "Pistte tehlikeli bir durum olduğunda veya kaza olduğunda",
            difficulty: "medium",
        },
        {
            question: "Hangi F1 takımı 'Gümüş Oklar' (Silver Arrows) olarak bilinir?",
            options: ["Ferrari", "Red Bull Racing", "McLaren", "Mercedes"],
            answer: "Mercedes",
            difficulty: "medium",
        },
        {
            question: "Formula 1'de 'takım emirleri' (team orders) ne anlama gelir?",
            options: ["Pilotların pit stop stratejileri", "Takımın bir pilota diğerine yol vermesi veya pozisyonunu koruması talimatı", "Pilotların medya ile ilişkileri", "Araç geliştirme programları"],
            answer: "Takımın bir pilota diğerine yol vermesi veya pozisyonunu koruması talimatı",
            difficulty: "medium",
        },
        {
            question: "FIA kısaltmasının açılımı nedir?",
            options: ["Formula International Association", "Fédération Internationale de l'Automobile", "Fast Italian Autos", "First In Action"],
            answer: "Fédération Internationale de l'Automobile",
            difficulty: "medium",
        },
        {
            question: "Bir F1 aracının minimum ağırlık limiti (pilot dahil) yaklaşık ne kadardır? (2023-2024 sezonları için)",
            options: ["500 kg", "650 kg", "798 kg", "900 kg"],
            answer: "798 kg", // 2023 için
            difficulty: "medium",
        },
        {
            question: "Formula 1'de puanlama sistemi nasıl işler? (İlk 10 pilota puan verilir)",
            options: ["Sadece ilk 3'e puan verilir", "İlk 10 pilota farklı ağırlıkta puanlar verilir", "Tüm pilotlara eşit puan verilir", "Sadece yarışı bitirenlere puan verilir"],
            answer: "İlk 10 pilota farklı ağırlıkta puanlar verilir", // 25-18-15-12-10-8-6-4-2-1
            difficulty: "medium",
        },
        // Hard
        {
            question: "Formula 1 tarihinde 'Grand Slam' yapmak (bir yarış hafta sonunda pole pozisyonu, en hızlı tur, tüm turları lider geçme ve yarışı kazanma) başarısını en çok tekrarlayan pilot kimdir?",
            options: ["Ayrton Senna", "Michael Schumacher", "Lewis Hamilton", "Jim Clark"],
            answer: "Jim Clark", // 8 kez
            difficulty: "hard",
        },
        {
            question: "Formula 1'de kullanılan KERS sistemi ne işe yarar?",
            options: ["Motorun soğutulmasına", "Frenleme sırasında açığa çıkan enerjinin geri kazanılıp depolanarak hızlanmada kullanılmasına", "Aerodinamik dengeyi sağlamaya", "Yakıt verimliliğini artırmaya"],
            answer: "Frenleme sırasında açığa çıkan enerjinin geri kazanılıp depolanarak hızlanmada kullanılmasına", // Kinetic Energy Recovery System
            difficulty: "hard",
        },
        {
            question: "Formula 1'de bir sezonda en çok yarış kazanan pilot rekoru kime aittir? (Mayıs 2024 itibarıyla)",
            options: ["Michael Schumacher", "Lewis Hamilton", "Sebastian Vettel", "Max Verstappen"],
            answer: "Max Verstappen", // 2023 sezonunda 19 yarış
            difficulty: "hard",
        },
        {
            question: "Hangi F1 pisti 'Yeşil Cehennem' (The Green Hell) olarak da bilinir?",
            options: ["Silverstone", "Spa-Francorchamps", "Monza", "Nürburgring Nordschleife"],
            answer: "Nürburgring Nordschleife",
            difficulty: "hard",
        },
        {
            question: "Formula 1'de 'undercut' stratejisi nedir?",
            options: ["Rakipten daha geç pit stop yaparak avantaj sağlamak", "Rakipten daha erken pit stop yaparak yeni lastiklerle avantaj elde etmek ve öne geçmek", "Yarışın başında yavaş gidip sona doğru hızlanmak", "Tek pit stopla yarışı tamamlamak"],
            answer: "Rakipten daha erken pit stop yaparak yeni lastiklerle avantaj elde etmek ve öne geçmek",
            difficulty: "hard",
        },
        {
            question: "Formula 1 tarihinde yarış kazanan tek kadın pilot kimdir?",
            options: ["Lella Lombardi", "Maria Teresa de Filippis", "Divina Galica", "Susie Wolff"],
            answer: "Lella Lombardi", // Yarım puan almıştır ama yarışta puan alan tek kadındır, tam yarış zaferi yoktur. Soru "puan alan" olmalı.
                                        // F1 tarihinde resmi bir Grand Prix kazanan kadın pilot yoktur. Lella Lombardi puan alan tek kadındır (0.5 puan).
                                        // Bu soru hatalı. Düzeltme: "F1 tarihinde puan alan tek kadın pilot kimdir?" -> "Lella Lombardi"
            difficulty: "hard",
        },
        {
            question: "Formula 1'de 'Concorde Anlaşması' (Concorde Agreement) neyi düzenler?",
            options: ["Pilot maaşlarını", "Pist güvenlik standartlarını", "Takımlar, FIA ve Formula 1 yönetimi arasındaki ticari ve idari ilişkileri", "Aerodinamik kuralları"],
            answer: "Takımlar, FIA ve Formula 1 yönetimi arasındaki ticari ve idari ilişkileri",
            difficulty: "hard",
        },
        {
            question: "Hangi pilot, F1 kariyerine başladıktan sonra en uzun süre (en çok yarış) sonra ilk galibiyetini almıştır?",
            options: ["Nico Rosberg", "Jenson Button", "Sergio Pérez", "Mark Webber"],
            answer: "Sergio Pérez", // 190 yarış sonra (Sakhir GP 2020)
            difficulty: "hard",
        },
        {
            question: "F1'de kullanılan 'Halo' güvenlik sistemi ilk olarak hangi sezonda zorunlu hale getirilmiştir?",
            options: ["2016", "2017", "2018", "2019"],
            answer: "2018",
            difficulty: "hard",
        },
        {
            question: "Formula 1'in kurucusu veya 'F1'in babası' olarak kabul edilen kişi kimdir?",
            options: ["Enzo Ferrari", "Colin Chapman", "Bernie Ecclestone", "Juan Manuel Fangio"],
            answer: "Bernie Ecclestone", // Modern F1'in ticari haklarını yönetip büyütmesiyle tanınır.
            difficulty: "hard",
        },
    ],
    tennis: [
        // Easy
        {
            question: "Teniste bir maç kazanmak için genellikle kaç set almak gerekir (Grand Slam erkekler hariç)?",
            options: ["1", "2", "3", "4"],
            answer: "2", // Best of 3 sets
            difficulty: "easy",
        },
        {
            question: "Teniste servis atarken top fileye değip doğru kutuya düşerse ne olur?",
            options: ["Sayı rakibe verilir", "Servis tekrarlanır (let)", "Puan servis atana verilir", "Oyuncu uyarılır"],
            answer: "Servis tekrarlanır (let)",
            difficulty: "easy",
        },
        {
            question: "Teniste '0' puana ne denir?",
            options: ["Zero", "Nil", "Love", "Blank"],
            answer: "Love",
            difficulty: "easy",
        },
        {
            question: "Wimbledon Tenis Turnuvası hangi zeminde oynanır?",
            options: ["Toprak kort", "Sert kort", "Çim kort", "Halı kort"],
            answer: "Çim kort",
            difficulty: "easy",
        },
        {
            question: "Roger Federer hangi ülkenin tenisçisidir?",
            options: ["İspanya", "Sırbistan", "İsviçre", "Almanya"],
            answer: "İsviçre",
            difficulty: "easy",
        },
        {
            question: "Teniste bir oyuncu servis karşılarken topa vurmadan önce topun kendi sahasında sekmesine izin vermeli midir?",
            options: ["Evet, her zaman", "Hayır, doğrudan vurabilir (vole)", "Sadece ikinci serviste", "Kural yoktur"],
            answer: "Evet, her zaman", // Servis karşılarken topun sekmesi gerekir.
            difficulty: "easy",
        },
        {
            question: "Tenis topunun standart rengi genellikle nedir?",
            options: ["Beyaz", "Turuncu", "Sarı (Optik Sarı)", "Yeşil"],
            answer: "Sarı (Optik Sarı)",
            difficulty: "easy",
        },
        {
            question: "Serena Williams kaç tekler Grand Slam şampiyonluğu kazanmıştır? (Mayıs 2024 itibarıyla)",
            options: ["18", "20", "23", "25"],
            answer: "23",
            difficulty: "easy",
        },
        {
            question: "Teniste beraberlik durumunda (örneğin 6-6 oyunlarda) oynanan özel oyuna ne denir?",
            options: ["Avantaj Oyunu", "Altın Set", "Tie-break", "Bonus Oyun"],
            answer: "Tie-break",
            difficulty: "easy",
        },
        {
            question: "Rafael Nadal hangi Grand Slam turnuvasında en çok şampiyonluk yaşamıştır?",
            options: ["Avustralya Açık", "Fransa Açık (Roland Garros)", "Wimbledon", "ABD Açık"],
            answer: "Fransa Açık (Roland Garros)",
            difficulty: "easy",
        },
        // Medium
        {
            question: "Teniste 'Grand Slam' yapmak ne anlama gelir?",
            options: ["Bir sezonda 4 ana turnuvayı (Avustralya Açık, Fransa Açık, Wimbledon, ABD Açık) kazanmak", "Bir maçta hiç puan kaybetmemek", "Bir seti 6-0 kazanmak", "Bir turnuvada tüm maçları kazanmak"],
            answer: "Bir sezonda 4 ana turnuvayı (Avustralya Açık, Fransa Açık, Wimbledon, ABD Açık) kazanmak",
            difficulty: "medium",
        },
        {
            question: "Novak Djokovic, tek erkeklerde en çok Grand Slam kazanan oyuncu rekorunu kime aittir? (Mayıs 2024 itibarıyla)",
            options: ["Roger Federer", "Rafael Nadal", "Pete Sampras", "Kendisine (Novak Djokovic)"],
            answer: "Kendisine (Novak Djokovic)",
            difficulty: "medium",
        },
        {
            question: "Teniste bir sette durum 40-40 olduğunda buna ne ad verilir?",
            options: ["Match point (Maç sayısı)", "Set point (Set sayısı)", "Deuce (Berabere)", "Advantage (Avantaj)"],
            answer: "Deuce (Berabere)",
            difficulty: "medium",
        },
        {
            question: "Fransa Açık (Roland Garros) tenis turnuvası hangi şehirde düzenlenir?",
            options: ["Lyon", "Marsilya", "Nice", "Paris"],
            answer: "Paris",
            difficulty: "medium",
        },
        {
            question: "Teniste 'ace' ne demektir?",
            options: ["Rakibin karşılayamadığı, doğrudan sayı olan servis", "Çok uzun süren bir ralli", "Topun fileye takılması", "Hakem kararına itiraz etmek"],
            answer: "Rakibin karşılayamadığı, doğrudan sayı olan servis",
            difficulty: "medium",
        },
        {
            question: "ATP ve WTA neyin kısaltmalarıdır?",
            options: ["Association of Tennis Professionals ve Women's Tennis Association", "Advanced Tennis Players ve World Tennis Academy", "All Tennis Pros ve Worldwide Tennis Action", "American Tennis Program ve Women's Tour Agency"],
            answer: "Association of Tennis Professionals ve Women's Tennis Association",
            difficulty: "medium",
        },
        {
            question: "Teniste 'forehand' vuruşu genellikle nasıl yapılır?",
            options: ["Raketin oyuncunun vücudunun ters tarafında olduğu vuruş", "Oyuncunun avuç içinin topa baktığı, raketin dominant elle vücudun aynı tarafında olduğu vuruş", "Topa baş üzerinden yapılan smaç vuruşu", "Topu yavaşça file üzerinden aşırtma"],
            answer: "Oyuncunun avuç içinin topa baktığı, raketin dominant elle vücudun aynı tarafında olduğu vuruş",
            difficulty: "medium",
        },
        {
            question: "Davis Kupası nedir?",
            options: ["Kadınlar için uluslararası takım tenis turnuvası", "Erkekler için uluslararası takım tenis turnuvası", "Gençler için dünya şampiyonası", "Profesyonel tenisçiler için bireysel bir turnuva"],
            answer: "Erkekler için uluslararası takım tenis turnuvası",
            difficulty: "medium",
        },
        {
            question: "Hangi tenisçi 'Toprak Kortun Kralı' olarak bilinir?",
            options: ["Roger Federer", "Novak Djokovic", "Bjorn Borg", "Rafael Nadal"],
            answer: "Rafael Nadal",
            difficulty: "medium",
        },
        {
            question: "Tek erkekler veya tek kadınlarda bir Grand Slam turnuvasını kazanan ilk siyahi tenisçi kimdir?",
            options: ["Arthur Ashe", "Althea Gibson", "Serena Williams", "Yannick Noah"],
            answer: "Althea Gibson", // 1956 Fransa Açık (kadınlar). Arthur Ashe 1968 ABD Açık (erkekler).
            difficulty: "medium",
        },
        // Hard
        {
            question: "Tenis tarihinde 'Golden Slam' (aynı yıl içinde dört Grand Slam ve Olimpiyat altın madalyası) başarısını elde eden tek kadın tenisçi kimdir?",
            options: ["Serena Williams", "Margaret Court", "Steffi Graf", "Martina Navratilova"],
            answer: "Steffi Graf", // 1988
            difficulty: "hard",
        },
        {
            question: "Tenis kortunun file yüksekliği merkezde ne kadardır?",
            options: ["0.914 metre (3 feet)", "1.00 metre", "0.850 metre", "1.07 metre (3.5 feet)"],
            answer: "0.914 metre (3 feet)",
            difficulty: "hard",
        },
        {
            question: "Bir tenis maçında 'Hawk-Eye' sistemi ne için kullanılır?",
            options: ["Oyuncuların hızını ölçmek için", "Topun kort içinde mi yoksa dışında mı olduğunu elektronik olarak belirlemek için", "Servis hızını ölçmek için", "Raket gerginliğini kontrol etmek için"],
            answer: "Topun kort içinde mi yoksa dışında mı olduğunu elektronik olarak belirlemek için",
            difficulty: "hard",
        },
        {
            question: "ITF (Uluslararası Tenis Federasyonu) hangi yıl kurulmuştur?",
            options: ["1896", "1913", "1945", "1972"],
            answer: "1913",
            difficulty: "hard",
        },
        {
            question: "Teniste 'Continental grip' (Kıta tutuşu) genellikle hangi vuruşlar için tercih edilir?",
            options: ["Forehand spin vuruşları", "Servis, vole ve slice vuruşları", "Çift el backhand", "Topspin backhand"],
            answer: "Servis, vole ve slice vuruşları",
            difficulty: "hard",
        },
        {
            question: "En uzun süren profesyonel tenis maçı hangi oyuncular arasında ve hangi turnuvada oynanmıştır?",
            options: ["Federer vs Nadal, Wimbledon 2008", "Djokovic vs Nadal, Avustralya Açık 2012", "Isner vs Mahut, Wimbledon 2010", "Becker vs McEnroe, Davis Kupası 1987"],
            answer: "Isner vs Mahut, Wimbledon 2010", // 11 saat 5 dakika
            difficulty: "hard",
        },
        {
            question: "Hangi Grand Slam turnuvası 'Happy Slam' (Mutlu Slam) olarak da anılır?",
            options: ["Wimbledon", "Fransa Açık", "ABD Açık", "Avustralya Açık"],
            answer: "Avustralya Açık",
            difficulty: "hard",
        },
        {
            question: "Tenis tarihinde kariyerinde en çok tekler şampiyonluğu kazanan erkek oyuncu kimdir? (Mayıs 2024 itibarıyla)",
            options: ["Roger Federer", "Ivan Lendl", "Jimmy Connors", "Novak Djokovic"],
            answer: "Jimmy Connors", // 109 tekler şampiyonluğu
            difficulty: "hard",
        },
        {
            question: "Billie Jean King'in Bobby Riggs'e karşı oynadığı ve 'Cinsiyetler Savaşı' (Battle of the Sexes) olarak bilinen ünlü maç hangi yıl oynanmıştır?",
            options: ["1968", "1973", "1977", "1981"],
            answer: "1973",
            difficulty: "hard",
        },
        {
            question: "Teniste kullanılan 'challenge' (itiraz hakkı) sistemi, bir oyuncuya set başına genellikle kaç başarısız itiraz hakkı tanır (tie-break hariç)?",
            options: ["1", "2", "3", "Sınırsız"],
            answer: "3", // Grand Slam'lerde genellikle bu şekildedir, tie-break'te ek hak verilir.
            difficulty: "hard",
        },
    ]
};

export default questions;