export const imageLoader = ({ src, width, quantity }) => {
    return `http://localhost:3000/${src}?w=${width}&q=${quantity || 75}`
  }