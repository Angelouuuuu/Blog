import ct1 from "../assets/images/CT(1).jpeg";
import sb1 from "../assets/images/SB(1).jpg";
import nm1 from "../assets/images/NM(1).jpg";
import d4 from "../assets/images/d4(1).jpg";
import lrt1 from "../assets/images/lrt1.jpg";
import a from "../assets/images/5.jpeg";
import mq1 from "../assets/images/MQ(1).jpg";
import ct0 from "../assets/images/CT(0).jpeg";
import ct2 from "../assets/images/CT(2).jpeg";
import ct3 from "../assets/images/CT(3).jpg";
import ct4 from "../assets/images/CT(4).jpg";
import sb2 from "../assets/images/SB(2).jpg";
import sb3 from "../assets/images/SB(3).jpg";
import sb4 from "../assets/images/SB(4).jpg";
import sb5 from "../assets/images/sb5.jpeg";
import nm2 from "../assets/images/NM(2).jpg";
import nm3 from "../assets/images/NM(3).jpg";
import nm4 from "../assets/images/NM(4).jpg";
import nm5 from "../assets/images/NM(5).jpg";
import d2 from "../assets/images/d4(3).jpg";
import d3 from "../assets/images/d4(5).jpg";
import d5 from "../assets/images/d4(7).jpg";
import d6 from "../assets/images/d4(9).jpg";
import lrt2 from "../assets/images/lrt2.jpg";
import lrt3 from "../assets/images/lrt3.jpg";
import lrt4 from "../assets/images/lrt4.jpg";
import lrt5 from "../assets/images/lrt5.jpg";
import lrt6 from "../assets/images/lrt6.jpg";
import lrt7 from "../assets/images/lrt7.jpg";
import lrt8 from "../assets/images/lrt8.jpg";
import lrt9 from "../assets/images/lrt9.jpg";
import mq2 from "../assets/images/MQ(2).jpg";
import mq3 from "../assets/images/MQ(3).jpg";
import extra1 from "../assets/images/extra1.jpeg";
import extra2 from "../assets/images/extra2.jpeg";
import extra3 from "../assets/images/extra3.jpeg";
import c from "../assets/images/1.jpeg";
import b from "../assets/images/2.jpeg";
import d from "../assets/images/3.jpeg";
import e from "../assets/images/4.jpeg";
import day1 from "../assets/images/Day1.jpg";
import day2 from "../assets/images/Day1(2).jpg";
import day4 from "../assets/images/Day1(4).jpg";
import day5 from "../assets/images/day1(5).jpeg";
import day3 from "../assets/images/day1(3).jpeg";




export const blogPosts = [
  {
    id: 1,
    title: "Day 1: City Tour",
    summary: "The web development landscape ...",
    content: [
      "Our first day was filled with a rich cultural journey through Manila’s historic heart. Walking through Intramuros, I felt like I was stepping back in time—the cobblestone streets and old Spanish architecture made history come alive. At Fort Santiago, I was fascinated by the stories of national hero José Rizal and the solemn atmosphere inside his prison cell. Rizal Park was a breath of fresh air—serene and symbolic—while the Manila Cathedral and San Agustin Church amazed me with their grand architecture and religious significance. Visiting the Cultural Center of the Philippines (CCP) gave me a glimpse of Filipino artistic expression, and we capped off the day with a fun and relaxing stroll along Mall of Asia’s baywalk, enjoying the cool breeze and sunset by the sea.",
     
    ],
    image: ct0,
    category: "technology",
    author: "Necole Malbacias",
    date: "April 07, 2025",
    gallery: [
      ct1, ct2, ct3, ct4,
    ],
    featured: true,
  },
  {
    id: 2,
    title: "Day 2: It's Subic Bay Day!",
    summary: "On our second day, we shifted gears ...",
    content: [
      "On our second day, we shifted gears into a more technical and security-focused adventure. At the SBMA Law Enforcement Communication Branch, I was impressed by how well-organized and high-tech their operations were.",
      "earning about their communication systems gave me new respect for the people keeping peace in the area. Then, at the Seaport Department’s Vessel Traffic Management System, I discovered how complex and precise port operations can be. ",
      "Watching how ships are tracked and managed was like seeing a live strategy game in action—it made me appreciate the brains behind maritime logistics.",
    ],
    image: sb1,
    category: "events",
    author: "Necole Malbacias",
    date: "April 08, 2025",
    gallery: [
      sb2, sb3, sb4, sb5
    ],
  },

  {
    id: 3,
    title: "Day 3: Museum Day",
    summary: "Day three was all about heritage...",
    content: [
      "Day three was all about heritage and nature. Visiting the Museo ni Manuel L. Quezon gave me insight into the life and legacy of one of our country’s greatest presidents. I felt inspired by his leadership and the beautifully preserved artifacts that told his story.",
      "At the National Museum of Natural History, I was in awe of the stunning exhibits—from Philippine wildlife to majestic tree canopies. It felt like exploring the wonders of nature under one roof, and I left with a deeper appreciation for our environment and biodiversity.",

    ],
    image: nm1,
    category: "tutorials",
    author: "Necole Malbacias",
    date: "April 09, 2025",
    gallery: [
      nm2, nm3, nm4, nm5, mq1,mq2,mq3
    ],
    featured: false,
  },

  {
    id: 4,
    title: "Day 4: Hytec Power Inc.",
    summary: "Hytec Power Inc., I witnessed the role...",
    content: [
      "Hytec Power Inc., I witnessed the role of automation and innovation in industry. The machinery and technology used for power and training services were impressive—it showed me how technical knowledge turns into real-world applications.",
    ],
    image: lrt1,
    category: "tutorials",
    author: "Necole Malbacias",
    date: "April 10, 2025",
    gallery: [
      lrt2, lrt3, lrt4, lrt5, lrt6, lrt7, lrt8, lrt9,
    ],
    featured: true,
  },

  {
    id: 5,
    title: "Day 5: The Foreman Tour",
    summary: "Day five gave me a behind-the-scenes look ....",
    content: [
      "Day five gave me a behind-the-scenes look at the systems that keep our city moving. At the LRT Line 2 Authority, I saw how public transportation is managed and maintained.",
      "It was interesting to learn how trains are dispatched, monitored, and kept safe. The Traffic Engineering Center was equally eye-opening—seeing how traffic data is analyzed and how smart systems are used to ease congestion made me realize how much thought goes into making our roads safer and more efficient."
    ],
    image: d4,
    category: "news",
    author: "Necole Malbacias",
    date: "April 11, 2025",
    gallery: [
      d2, d3, d5, d6, 
    ],
    featured: false,
  },

  {
    id: 6,
    title: "Day 6: D' Baguio City",
    summary: "Our final day was a ...",
    content: [
      "Our final day was a relaxing and refreshing escape to Baguio. Picking fresh strawberries at the Strawberry Farm was a sweet experience—literally and figuratively.",
      "The Chinese Bell Church offered peace and cultural reflection, while the view at Mines View Park took my breath away. At Wright Park, riding horses and enjoying the pine-scented air was both calming and fun. Visiting the grand Mansion House made me feel like royalty, and we ended the day at Burnham Park, boating and laughing with friends. It was the perfect end to an unforgettable journey.",
    ],
    image: extra2,
    category: "tutorials",
    author: "Necole Malbacias",
    date: "April 12, 2025",
    gallery: [
      a, c,d,e , extra2, extra3
    ],
    featured: true,
  },

  {
    id: 7,
    title: "Day 7: Sepanx",
    summary: "As our tour came to an end, ...",
    content: [
      "As our tour came to an end, Day 7 was a mix of emotions. While we were excited to go back home to Zamboanga, there was also a sense of sadness leaving behind the places and memories we made over the past week. The journey home was filled with laughter, reflections, and stories shared with friends. It was a peaceful ride that gave us time to look back on everything we learned and experienced. This tour not only gave us knowledge but also unforgettable moments we’ll carry with us for a long time.",
    ],
    image: day3,
    category: "tutorials",
    author: "Necole Malbacias",
    date: "April 14, 2025",
    gallery: [
      day1, day2, day4 , day5,
    ],
    featured: true,
  },

]
