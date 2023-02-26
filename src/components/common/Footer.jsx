import React from "react";
import styles from "@/styles/layout/footer.module.css";
import Image from "next/image";
import logo from "public/footer_logo.png";
import facebook from "public/sns/Facebook.png";
import Instagram from "public/sns/Instagram.png";
import LinkedIn from "public/sns/LinkedIn.png";
import twitter from "public/sns/Twitter.png";
import youTube from "public/sns/YouTube.png";
import Link from "next/link";

function Footer(props) {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footer_wrap}>
          <div className={styles.left}>
            <div className={styles.footerLogo}>
              <Image src={logo} alt={logo}></Image>
            </div>
            <div className={styles.copyright}>
              <p>
                Copyright © 2023 Jazzle<br></br> Enterprise.
              </p>
              <p>
                <strong> 재즐엔터프라이즈(주)</strong>
              </p>
            </div>
            <div className={styles.info}>
              <div className={styles.info_list}>
                <strong>사업장주소</strong>

                <span>서울 서대문구 백련사길 7(홍은동) 재즐빌딩 3층</span>
              </div>
              <div className={styles.info_list}>
                <strong>대표자</strong>

                <span>이유식</span>
              </div>
              <div className={styles.info_list}>
                <strong>사업자등록번호</strong>

                <span>105-86-33377</span>
              </div>
              <div className={styles.info_list}>
                <strong>대표안내전화</strong>
                <span>TEL : 02-322-9592</span>
                <span>FAX : 02-332-9598</span>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.footer_nav}>
              <span>기업소개</span>
              <ul>
                <li>
                  <Link href="">인사말</Link>
                </li>
                <li>
                  <Link href="">연혁</Link>
                </li>
                <li>
                  <Link href="">인증현황</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_nav}>
              <span>에코사업부</span>
              <ul>
                <li>
                  <Link href="">PVOH</Link>
                </li>
                <li>
                  <Link href="">BIO PE</Link>
                </li>
                <li>
                  <Link href="">PLA</Link>
                </li>
                <li>
                  <Link href="">PCR</Link>
                </li>
                <li>
                  <Link href="">MDOPE</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footer_nav}>
              <span>필름사업부</span>
              <ul>
                <li>
                  <Link href="">PP필름</Link>
                </li>
                <li>
                  <Link href="">TPU</Link>
                </li>
                <li>
                  <Link href="">PPF</Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.footer_nav} ${styles.footer_sns}`}>
              <span>Follow us</span>
              <ul>
                <li>
                  <Link href="">
                    <div className={styles.sns_img}>
                      <Image src={facebook} alt="facebook"></Image>
                    </div>
                    <span>Facebook</span>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <div className={styles.sns_img}>
                      <Image src={Instagram} alt="Instagram"></Image>
                    </div>
                    <span>Instagram</span>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <div className={styles.sns_img}>
                      <Image src={LinkedIn} alt="LinkedIn"></Image>
                    </div>
                    <span>LinkedIn</span>
                  </Link>
                </li>
                <li>
                  <Link href="">
                    <div className={styles.sns_img}>
                      <Image src={twitter} alt="twitch"></Image>
                    </div>
                    <span>Twitter</span>
                  </Link>
                </li>

                <li>
                  <Link href="">
                    <div className={styles.sns_img}>
                      <Image src={youTube} alt="youTube"></Image>
                    </div>
                    <span>YouTube</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
