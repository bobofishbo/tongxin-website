import Pagination from "@components/Pagination";
import config from "@config/config.json";
import SeoMeta from "@layouts/partials/SeoMeta";
import { getListPage, getSinglePage } from "@lib/contentParser";
import { markdownify } from "@lib/utils/textConverter";
import Authors from "@partials/Authors";

// blog pagination
const AuthorPagination = async ({ params }) => {
  const currentPage = parseInt((params && params.slug) || 1);
  const { pagination } = config.settings;

  // Fetching authors and author index
  const authors = await getSinglePage("content/authors"); // Ensure this function is async
  const authorIndex = await getListPage("content/authors/_index.md");

  // Paginate authors
  const indexOfLastAuthor = currentPage * pagination;
  const indexOfFirstAuthor = indexOfLastAuthor - pagination;
  const totalPages = Math.ceil(authors.length / pagination);
  const currentAuthors = authors.slice(indexOfFirstAuthor, indexOfLastAuthor);

  const { frontmatter, content } = authorIndex;
  const { title } = frontmatter;

  return (
    <>
      <SeoMeta title={title} />
      <section className="section">
        <div className="container text-center">
          {markdownify(title, "h1", "h2 mb-16")}
          <Authors authors={currentAuthors} />
          <Pagination
            section="authors"
            totalPages={totalPages}
            currentPage={currentPage}
          />
        </div>
      </section>
    </>
  );
};

export default AuthorPagination;

// get authors pagination slug
export const generateStaticParams = async () => {
  const getAllSlug = await getSinglePage("content/authors"); // Make async
  const { pagination } = config.settings;

  // Ensure slugs are mapped correctly
  const totalPages = Math.ceil(getAllSlug.length / pagination);
  let paths = [];

  for (let i = 1; i <= totalPages; i++) {
    paths.push({
      slug: i.toString(),
    });
  }

  return paths;
};
