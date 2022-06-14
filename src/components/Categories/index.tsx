import { Category } from "components";
import { useEffect, useState } from "react";
import { FC, memo } from "react";
import { http } from "utils";
import "./styles.scss";

export const Categories: FC = memo(() => {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const { data } = await http.get("/jokes/categories");
      setCategories(data);
    };

    if (!categories.length) {
      fetchCategories();
    }
  }, [categories]);

  return (
    <div className="categories container">
      <div>
        {categories.map((cat) => (
          <Category key={cat} name={cat} />
        ))}
        <Category name="View All" viewAll />
      </div>
    </div>
  );
});
