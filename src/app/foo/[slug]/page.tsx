export default function FooNested({ params }: { params: { slug: string } }) {
  return <div>{params.slug}</div>;
}
