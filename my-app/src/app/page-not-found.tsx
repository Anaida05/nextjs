import Link from "next/link";

const PageNotFound = () => {
  return (
    <>
      <p>This page is not valid</p>
      <Link href="/">Return Home </Link>
    </>
  );
};
export default PageNotFound;
