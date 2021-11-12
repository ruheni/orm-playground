import { PrismaClient } from "@prisma/client";
import { v4 as uuid } from 'uuid'


const prisma = new PrismaClient();

async function main() {
  const articleId = uuid()
  await prisma.$transaction([
    prisma.article.create({ data: { id: articleId, title: 'Delegated Types?', body: 'Learn all about Delegated types and how they work' } }),
    prisma.content.create({ data: { id: articleId, type: 'article' } })
  ])

  const videoId = uuid()
  await prisma.$transaction([
    prisma.video.create({
      data: {
        id: videoId,
        duration: 68,
      }
    }),
    prisma.content.create({ data: { id: videoId, type: 'video' } })
  ])


  const imageId = uuid()
  await prisma.$transaction([
    prisma.image.create({
      data: {
        id: imageId,
        width: 100,
        height: 100,
      }
    }),
    prisma.content.create({ data: { id: imageId, type: 'image' } })
  ])

  const content = await prisma.content.findMany({
    orderBy: {
      type: 'asc'
    }
  });
  
  const feed = await Promise.all(content.map((contentItem) => {
    // @ts-ignore
    return prisma[contentItem.type].findUnique({ where: { id: contentItem.id } });
  }))

  console.dir(feed, { depth: Infinity })

}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })