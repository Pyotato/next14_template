import Link from 'next/link';

export default function Mainpage({
  reactVersion = 'unknown',
  nextJsVersion = 'unknown',
}) {
  return (
    <main>
      <section>
        <div>hi!🌺</div>
        <Link href='/mypage' prefetch={true}>
          go to my page
        </Link>
        <div>
          <p>
            mainPage! The latest React version is {reactVersion}, and the latest
            NextJs version is {nextJsVersion}
          </p>
        </div>
      </section>
    </main>
  );
}
