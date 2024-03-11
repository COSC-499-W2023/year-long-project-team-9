import { useEffect } from "react";

const useScroll = () => {
    const scroll = (id: string) => {
        const element = document.getElementById(id.replace('#', ''));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return scroll;
}

export default useScroll;