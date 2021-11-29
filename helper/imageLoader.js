const domain = window.location.host;


export const imageLoader = ({ src, width, quantity }) => {
    return `https://${domain}/${src}?w=${width}&q=${quantity || 75}`
  }
