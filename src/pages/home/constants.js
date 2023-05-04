import abasabad from "../../../assets/img/asbasabad.jpeg";
import miankale from "../../../assets/img/miankale.jpg";
import yazd from "../../../assets/img/yazd.jpg";
import geer from '../../../assets/img/geer.jpg'
import gheshm from "../../../assets/img/gheshm.jpeg";
import watch from '../../../assets/img/watch.jpg'
import taft from '../../../assets/img/taft.jpg'
import hamegani from '../../../assets/img/hamegani.jpg'
import introBanner from "../../../assets/img/banner-2.png";
import relSiteLogo1 from "../../../assets/img/otherWebsites/Codal.png";
import relSiteLogo2 from "../../../assets/img/otherWebsites/fanavari.png";
import relSiteLogo3 from "../../../assets/img/otherWebsites/fara.png";
import relSiteLogo4 from "../../../assets/img/otherWebsites/kala.png";
import relSiteLogo5 from "../../../assets/img/otherWebsites/sazman.png";

export const sample = [
  {
    title: "سفر کلاردشت به رامسر",
    description: `در ایران هرکسی که بخواهد طبیعت‌گردی کند و روحش تازه شود به شهرهای شمالی سفر می‌کند. عباس آباد یکی از شهرستان‌های شمالی ایران است که در استان مازندران واقع شده و به زیبایی و سرسبزی معروف است. درختان سر به فلک کشیده و انبوه، هوای صاف و خنک، پرندگان زیبا، جنگل‌ و رستوران ها و کافه‌ها باعث می‌شود که مردم ساعت‌ها در این منطقه بمانند. عباس آباد یکی از شهرستان‌های جذاب و خوش آب و هوای مازندران است. سالیانه گردشگران زیادی از سراسر دنیا به این شهرستان سفر می‌کنند. این شهرستان به دلیل  امکانات رفاهی متعدد و متنوع، همواره جایگاه ویژه و خاصی در بین گردشگران و علاقه مندان به طبیعت دارد.

    `,
    // imgurl: `uploads/programs/${imgurl}`,
    src: abasabad,
    alt: "سفر کلاردشت به رامسر",
    
    price: 1500000,
    degree:1,
    enddateday: 29,
    enddatemonth: 2,
    enddateyear: 1402,
    startdateday: 26,
    startdatemonth: 2,
    startdateyear: 1402,
    camptype:1,
    distance:1000,
    
  },


  {
    title: "سفر میانکاله ",
    description: `تالاب میانکاله یکی از جاهای دیدنی بهشهر است که با مناظری بکر و زیبا و پوشش گیاهی بی‌نظیر، توجه طبیعت‌گردان را جلب می‌کند. اما برای گردشگران و علاقه‌مندان محیط‌زیست و حیات‌وحش، برجسته‌ترین خصوصیت آن، جذابیت پدیده پرنده‌نگری در پاییز و زمستان در این منطقه است.`,
    src: miankale,
    alt: "سفر میانکاله ",
    price: 1800000,
    degree:1,
    enddateday: 29,
    enddatemonth: 2,
    enddateyear: 1402,
    startdateday: 26,
    startdatemonth: 2,
    startdateyear: 1402,
    camptype:1,
    distance:1000,
    
  },
];

export const lastPrograms = [
  {
    title: "سفر یزد ",

    src: yazd,

    link: "#",
    description:"این سفر در اسفند ماه 1401 برگزار شد"
  },
  {
    title: "سفر قشم ",

    src: gheshm,

    link: "#",
    description:"این سفر در بهمن ماه 1401 برگزار شد"
  },
];



export const educationalContents = [
  {
    title: "نحوه تعویض دنده",

    src: geer,

    link: "#",
    description:"آموزش نحوه و زمان تعویض دنده دوچرخه"
  },
  {
    title: "شستشوی دوچرخه",

    src: watch,

    link: "#",
    description:"نکاتی در مورد نظافت دوچرخه"
  },
];


export const weblogContents = [
  {
    title: "مسیر دوچرخه یزد به تفت",

    src: taft,

    link: "#",
    description:"جاده سلامت یزد – تفت افتتاح شد"
  },
  {
    title: "رکاب زنی همگانی شهر تهران",

    src: hamegani,

    link: "#",
    description:"رکاب‌زنی در شلوغی پایتخت"
  },
];




export const introSectionData = {
  title: {
    text: "بهترین سهام را در بازار انتخاب کنید.",
    highlight: "سهام",
  },
  text: `
          برای اینکه بتوانیم بهترین سهام را در بازار
          انتخاب کنیم باید بتوانیم ابتدا آن سهم را به خوبی تحلیل
          و بررسی کنیم. شما میتوانید از تحلیل های تحلیلگران کارگزاری آتیه
          استفاده کنید و یا در دوره های آموزشی این کارگزاری شرکت کنید.`,
  banner: {
    src: introBanner,
    alt: "بهترین سهام را در بازار انتخاب کنید.",
  },
  linkList: [
    {
      title: "> تحلیل‌های تحلیل‌گران کارگزاری",
      link: "",
    },
    {
      title: "> شرکت در دوره‌های آموزشی",
      link: "",
    },
  ],
};

export const relatedSiteData = {
  title: "وبسایت‌های مرتبط",
  siteList: [
    {
      title: "مدیریت فناوری بورس",
      logoSrc: relSiteLogo2,
      logoAlt: "مدیریت فناوری بورس",
      link: "https://www.tsetmc.com/",
    },
    {
      title: "سازمان بورس",
      logoSrc: relSiteLogo5,
      logoAlt: "سازمان بورس",
      link: "https://www.seo.ir",
    },
    {
      title: "کدال",
      logoSrc: relSiteLogo1,
      logoAlt: "کدال",
      link: "https://www.codal.ir",
    },
    {
      title: "بورس کالا",
      logoSrc: relSiteLogo4,
      logoAlt: "بورس کالا",
      link: "https://www.ime.co.ir",
    },
    {
      title: "فرابورس",
      logoSrc: relSiteLogo3,
      logoAlt: "فرابورس",
      link: "https://www.ifb.ir/",
    },
  ],
};
