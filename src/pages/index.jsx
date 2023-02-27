import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import { Noto_Sans } from "next/font/google";
const inter = Noto_Sans({ subsets: ["latin"], weight: "400" });
import Link from "next/link";
import { RxArrowRight, RxCaretRight } from "react-icons/rx";
import { GrFormClose } from "react-icons/gr";
import Section from "@/components/Section";
import Title from "@/components/Title";
import Card from "@/components/Card";
import Flex from "@/components/layout/Flex";
import Card2 from "@/components/Card2";
import { useState, useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";

// 이미지
import dumy from "../../public/card_dumy.jpg";
import google from "public/Google.png";
import pinterest from "public/Pinterest.png";
import twitch from "public/Twitch.png";
import youtube from "public/YouTube.png";
import facebook from "public/Facebook.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
export default function Home() {
  const prev = useRef(null);
  const next = useRef(null);
  const keyvisualPrev = useRef(null);
  const keyvisualNext = useRef(null);
  const [key, setKey] = useState([]);
  const [askToggle, setAskToggle] = useState(false);
  const [askToggle1, setAskToggle1] = useState(false);
  const [askToggle2, setAskToggle2] = useState(false);
  const [askToggle3, setAskToggle3] = useState(false);

  const [askState, setAskState] = useState([
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas.",
    },
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas.",
    },
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas.",
    },
    {
      question: "What is Webflow and why is it the best website builder?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit id venenatis pretium risus euismod dictum egestas orci netus feugiat ut egestas.",
    },
  ]);

  Home.title = "ZAZZLE";

  return (
    <main>
      <section className={styles.keyvisual}>
        <div className={styles.keyvisual_slide}>
          <Swiper
            spaceBetween={0}
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
            pagination={{ clickable: true }}
            navigation={{
              prevEl: keyvisualPrev.current,
              nextEl: keyvisualNext.current,
            }}
            loop={true}
            loopedSlides="1"
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = keyvisualPrev.current;
              swiper.params.navigation.nextEl = keyvisualNext.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide className={styles.keyvisualSlide}>
              <div className={styles.keyvisual_wrap}>
                <div className={`${styles.title} container`}>
                  <h1>
                    Better choice<br></br> for Environment
                  </h1>
                  <p>
                    ECO FRIENDLY는 재즐이 창조하는 모든 가치의 시작인
                    경영이념에서 시작됩니다.<br></br> 재즐의 브랜드 아이덴티티를
                    반영한 행동방식을 통해 브랜드 미션을 달성하는 가치 체계로,
                    <br></br> 보다 견고하고 지속성 높은 재즐이 되기 위한
                    이정표가 될 것입니다.
                  </p>
                  <div className={styles.btns}>
                    <button type="button" className={styles.btn_more}>
                      <Link href="">
                        <span>ALL MORE</span>
                        <RxArrowRight className={styles.arrow} />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.keyvisualSlide}>
              <div className={styles.keyvisual_wrap}>
                <div className={`${styles.title} container`}>
                  <h1>
                    Better choice<br></br> for Environment
                  </h1>
                  <p>
                    ECO FRIENDLY는 재즐이 창조하는 모든 가치의 시작인
                    경영이념에서 시작됩니다.<br></br> 재즐의 브랜드 아이덴티티를
                    반영한 행동방식을 통해 브랜드 미션을 달성하는 가치 체계로,
                    <br></br> 보다 견고하고 지속성 높은 재즐이 되기 위한
                    이정표가 될 것입니다.
                  </p>
                  <div className={styles.btns}>
                    <button type="button" className={styles.btn_more}>
                      <Link href="">
                        <span>ALL MORE</span>
                        <RxArrowRight className={styles.arrow} />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className={styles.keyvisualSlide}>
              <div className={styles.keyvisual_wrap}>
                <div className={`${styles.title} container`}>
                  <h1>
                    Better choice<br></br> for Environment
                  </h1>
                  <p>
                    ECO FRIENDLY는 재즐이 창조하는 모든 가치의 시작인
                    경영이념에서 시작됩니다.<br></br> 재즐의 브랜드 아이덴티티를
                    반영한 행동방식을 통해 브랜드 미션을 달성하는 가치 체계로,
                    <br></br> 보다 견고하고 지속성 높은 재즐이 되기 위한
                    이정표가 될 것입니다.
                  </p>
                  <div className={styles.btns}>
                    <button type="button" className={styles.btn_more}>
                      <Link href="">
                        <span>ALL MORE</span>
                        <RxArrowRight className={styles.arrow} />
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
        <div ref={keyvisualPrev} className={styles.keyvisualPrev}>
          <RxCaretRight className={styles.na} />
        </div>
        <div ref={keyvisualNext} className={styles.keyvisualNext}>
          <RxCaretRight className={styles.na} />
        </div>
      </section>
      <Section>
        <Title>
          <h3>OUR BUSINESS</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit semper dalar
            <br></br>elementum tempus hac tellus libero accumsan.
          </p>
        </Title>
        <Flex gap="30px">
          <Card src={dumy}>
            <p>
              “Lorem ipsum dolor sit ametolil col consectetur adipiscing lectus
              a nunc mauris scelerisque sed egestas.”
            </p>
            <h4>John Carter</h4>
            <span>Head of Marketing at Facebook</span>
          </Card>
          <Card src={dumy}>
            <p>
              “Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra
              diam sit amet nisl suscipit adipis.”
            </p>
            <h4>John Carter</h4>
            <span>Head of Marketing at Facebook</span>
          </Card>
          <Card src={dumy}>
            <p>
              “Convallis posuere morbi leo urna molestie at elementum eu
              facilisis sapien pellentesque habitant.”
            </p>
            <h4>John Carter</h4>
            <span>Head of Marketing at Facebook</span>
          </Card>
        </Flex>
      </Section>
      <Section>
        <Title>
          <h3>Our results in numbers</h3>
        </Title>
        <Flex alignItems="center" justifyContent="space-between" gap="30px">
          <div className={styles.result}>
            <h4>
              99<span>%</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet<br></br> consectet adipiscing eli
            </p>
          </div>
          <div className={styles.result}>
            <h4>
              32<span>M</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet<br></br> consectet adipiscing eli
            </p>
          </div>
          <div className={styles.result}>
            <h4>
              125<span>+</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet<br></br> consectet adipiscing eli
            </p>
          </div>
          <div className={styles.result}>
            <h4>
              240<span>%</span>
            </h4>
            <p>
              Lorem ipsum dolor sit amet<br></br> consectet adipiscing eli
            </p>
          </div>
        </Flex>
      </Section>
      <Section>
        <Flex horizen>
          <Card2 src={dumy}>
            <div className={styles.card2_title}>
              <h4>John Carter</h4>
              <p>
                By creating a visual guide along the way, the designer<br></br>
                or developer can get input from the other people<br></br>
                involved in the website such as the customer, their<br></br>
                manager, and other members of the team.
              </p>
            </div>
            <div className={styles.card2_sub}>
              <div className={styles.card2_inner}>
                <h5>No.1</h5>
                <p>
                  The effect of different<br></br> scenarios on the display
                </p>
              </div>
              <div className={styles.card2_inner}>
                <h5>No.2</h5>
                <p>
                  The range of functions<br></br> available
                </p>
              </div>
            </div>
          </Card2>
          <Card2 src={dumy} reverse>
            <div className={styles.card2_title}>
              <h4>John Carter</h4>
              <p>
                By creating a visual guide along the way, the designer<br></br>
                or developer can get input from the other people<br></br>
                involved in the website such as the customer, their<br></br>
                manager, and other members of the team.
              </p>
            </div>
            <div className={styles.card2_sub}>
              <div className={styles.card2_inner}>
                <h5>No.1</h5>
                <p>
                  The effect of different<br></br> scenarios on the display
                </p>
              </div>
              <div className={styles.card2_inner}>
                <h5>No.2</h5>
                <p>
                  The range of functions<br></br> available
                </p>
              </div>
            </div>
          </Card2>
        </Flex>
      </Section>
      <Section>
        <Title>
          <h3>Jazzle Asked Questions</h3>
          <p>
            Cras tincidunt lobortis feugiat vivamus at morbi leo urna molestie
            atole<br></br> elementum eu facilisis faucibus interdum posuere.
          </p>
        </Title>
        <Flex horizen gap="24px" maxWidth="812px">
          <div
            className={`${styles.ask}  ${askToggle && styles.active}`}
            onClick={() => {
              setAskToggle((prev) => !prev);
            }}
          >
            <div className={styles.texts}>
              <div className={styles.question}>
                <h5>What is Webflow and why is it the best website builder?</h5>
              </div>
              <div className={`${styles.answer}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum egestas orci netus
                  feugiat ut egestas.
                </p>
              </div>
            </div>
            <div className={styles.askBtn}>
              <button type="button">
                <GrFormClose className={styles.askBtns_icon} />
              </button>
            </div>
          </div>
          <div
            className={`${styles.ask}  ${askToggle1 && styles.active}`}
            onClick={() => {
              setAskToggle1((prev) => !prev);
            }}
          >
            <div className={styles.texts}>
              <div className={styles.question}>
                <h5>What is Webflow and why is it the best website builder?</h5>
              </div>
              <div className={`${styles.answer}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum egestas orci netus
                  feugiat ut egestas.
                </p>
              </div>
            </div>
            <div className={styles.askBtn}>
              <button type="button">
                <GrFormClose className={styles.askBtns_icon} />
              </button>
            </div>
          </div>
          <div
            className={`${styles.ask}  ${askToggle2 && styles.active}`}
            onClick={() => {
              setAskToggle2((prev) => !prev);
            }}
          >
            <div className={styles.texts}>
              <div className={styles.question}>
                <h5>What is Webflow and why is it the best website builder?</h5>
              </div>
              <div className={`${styles.answer}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum egestas orci netus
                  feugiat ut egestas.
                </p>
              </div>
            </div>
            <div className={styles.askBtn}>
              <button type="button">
                <GrFormClose className={styles.askBtns_icon} />
              </button>
            </div>
          </div>
          <div
            className={`${styles.ask}  ${askToggle3 && styles.active}`}
            onClick={() => {
              setAskToggle3((prev) => !prev);
            }}
          >
            <div className={styles.texts}>
              <div className={styles.question}>
                <h5>What is Webflow and why is it the best website builder?</h5>
              </div>
              <div className={`${styles.answer}`}>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit id
                  venenatis pretium risus euismod dictum egestas orci netus
                  feugiat ut egestas.
                </p>
              </div>
            </div>
            <div className={styles.askBtn}>
              <button type="button">
                <GrFormClose className={styles.askBtns_icon} />
              </button>
            </div>
          </div>
        </Flex>
      </Section>
      <Section>
        <Title>
          <h3>Our custom</h3>
        </Title>
        <div className={styles.custom_slide}>
          <Swiper
            spaceBetween={50}
            slidesPerView={5}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: prev.current,
              nextEl: next.current,
            }}
            loop={true}
            loopedSlides="5"
            onInit={(swiper) => {
              swiper.params.navigation.prevEl = prev.current;
              swiper.params.navigation.nextEl = next.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >
            <SwiperSlide className={styles.customSlide}>
              <Image src={google} alt={google}></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.customSlide}>
              <Image src={pinterest} alt={pinterest}></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.customSlide}>
              <Image src={twitch} alt={twitch}></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.customSlide}>
              <Image src={youtube} alt={youtube}></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.customSlide}>
              <Image src={facebook} alt={facebook}></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.customSlide}>
              <Image src={google} alt={google}></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.customSlide}>
              <Image src={pinterest} alt={pinterest}></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.customSlide}>
              <Image src={twitch} alt={twitch}></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.customSlide}>
              <Image src={youtube} alt={youtube}></Image>
            </SwiperSlide>
            <SwiperSlide className={styles.customSlide}>
              <Image src={facebook} alt={facebook}></Image>
            </SwiperSlide>
          </Swiper>
          <div ref={prev} className={styles.prev}>
            <RxCaretRight className={styles.na} />
          </div>
          <div ref={next} className={styles.next}>
            <RxCaretRight className={styles.na} />
          </div>
        </div>
      </Section>
    </main>
  );
}
