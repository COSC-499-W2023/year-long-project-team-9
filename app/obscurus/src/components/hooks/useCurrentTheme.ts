import { useTheme } from "next-themes";

export const useCurrentTheme = ( type: string) => {
  const { theme } = useTheme();


  if (type === "primary") {
    if (theme === "dark" || theme === "system"){
      return "#F8FAFC"
    } else {
      return "#0F172A"
    }
  }

  if (type == "background"){
    if (theme === "dark" || theme === "system"){
      return "#0F172A"
    } else {
      return "#F8FAFC"
    }
  }

 
}