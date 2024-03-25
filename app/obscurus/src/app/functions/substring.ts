const substring = (str: string, len: number) => {
    return str.substring(0, len) && str.length > len ? str + "..." : str;
  }

  export default substring;
