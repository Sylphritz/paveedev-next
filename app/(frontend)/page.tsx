import Link from 'next/link'







export default function Home() {
  return (
    <div>
      <h1 className="text-4xl">Hello, world!</h1>
      <h1 className="text-4xl">Hello, world! 2</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
        condimentum magna. In sed massa dictum, ultrices ipsum vel, venenatis
        erat. Pellentesque <strong className="font-bold">habitant</strong> morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Fusce
        commodo enim eu nisl luctus aliquam. Morbi hendrerit facilisis metus
        rhoncus suscipit. In <Link href="/">tincidunt enim</Link> erat, non
        congue erat sodales ac. Ut tincidunt, justo sit amet scelerisque
        euismod, leo augue fermentum ipsum, a lobortis libero ipsum ac est.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam id
        condimentum magna. In sed massa dictum, ultrices ipsum vel, venenatis
        erat. Pellentesque <strong className="font-bold">habitant</strong> morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Fusce
        commodo enim eu nisl luctus aliquam. Morbi hendrerit facilisis metus
        rhoncus suscipit. In tincidunt enim erat, non congue erat sodales ac. Ut
        tincidunt, justo sit amet scelerisque euismod, leo augue fermentum
        ipsum, a lobortis libero ipsum ac est.
      </p>
    </div>
  )
}
