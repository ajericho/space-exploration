

export const imageLoader = ({ src, width, quantity }) => {
  const domain = window.location.host;
    return `https://${domain}/${src}?w=${width}&q=${quantity || 75}`
  }
