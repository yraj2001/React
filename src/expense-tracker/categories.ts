const categories = ["Entertainment", "Groceries", "Utilities"] as const;
// only created as App.tsx is importing a file which uses categories. it creates a clash b/w both files
export default categories;
