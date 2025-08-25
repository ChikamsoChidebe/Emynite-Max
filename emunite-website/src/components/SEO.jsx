import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const SEO = ({ title, description, keywords, image, type = 'website' }) => {
  const location = useLocation()
  const baseUrl = 'https://emynitemax.com'
  const currentUrl = `${baseUrl}${location.pathname}`

  useEffect(() => {
    // Update document title
    document.title = title

    // Update meta tags
    const updateMeta = (name, content) => {
      let element = document.querySelector(`meta[name="${name}"]`) || 
                   document.querySelector(`meta[property="${name}"]`)
      if (!element) {
        element = document.createElement('meta')
        element.setAttribute(name.startsWith('og:') ? 'property' : 'name', name)
        document.head.appendChild(element)
      }
      element.setAttribute('content', content)
    }

    updateMeta('description', description)
    updateMeta('keywords', keywords)
    updateMeta('og:title', title)
    updateMeta('og:description', description)
    updateMeta('og:type', type)
    updateMeta('og:url', currentUrl)
    updateMeta('og:image', image || `${baseUrl}/og-image.jpg`)
    updateMeta('twitter:card', 'summary_large_image')
    updateMeta('twitter:title', title)
    updateMeta('twitter:description', description)
    updateMeta('twitter:image', image || `${baseUrl}/og-image.jpg`)

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]')
    if (!canonical) {
      canonical = document.createElement('link')
      canonical.setAttribute('rel', 'canonical')
      document.head.appendChild(canonical)
    }
    canonical.setAttribute('href', currentUrl)
  }, [title, description, keywords, image, type, currentUrl])

  return null
}

export default SEO