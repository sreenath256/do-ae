// No need to import types in JS

// 🔹 Static pages
const staticRoutes = [
  '',
  '/contact',
  '/services',
]

// async function getBlogs() {
//   const res = await fetch('https://api.example.com/blogs', {
//     next: { revalidate: 60 }, // cache for 60 sec
//   })
//   return res.json()
// }

// async function getProducts() {
//   const res = await fetch('https://api.example.com/products', {
//     next: { revalidate: 60 },
//   })
//   return res.json()
// }

export default async function sitemap() {
  const baseUrl = 'https://dostudio.ae'

  // 🔹 Static URLs
  const staticUrls = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: route === '' ? 1 : 0.8,
  }))

  // 🔹 Dynamic URLs
//   const blogs = await getBlogs()
//   const products = await getProducts()

//   const blogUrls = blogs.map((blog) => ({
//     url: `${baseUrl}/blog/${blog.slug}`,
//     lastModified: new Date(blog.updatedAt || new Date()),
//     changeFrequency: 'weekly',
//     priority: 0.7,
//   }))

//   const productUrls = products.map((product) => ({
//     url: `${baseUrl}/product/${product.id}`,
//     lastModified: new Date(product.updatedAt || new Date()),
//     changeFrequency: 'daily',
//     priority: 0.9,
//   }))

  // 🔹 Combine all
  return [
    ...staticUrls,
    // ...blogUrls,
    // ...productUrls,
  ]
}