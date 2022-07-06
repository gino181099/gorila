import { useRouter } from "next/router";

const Selector = () => {
  const router = useRouter();
  const handleChange = (e) => {
    router.push(router.pathname, router.pathname, { locale: e.target.value });
  };
  return (
    <select onChange={handleChange} value={router.locale}>
      <option value="es">ES</option>
      <option value="en">EN</option>
      <option value="fr">FR</option>
    </select>
  );
};

export default Selector;
