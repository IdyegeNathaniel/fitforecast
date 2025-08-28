

export default function ForecastLayout({
  children,
  recommendation,
  params
}: {
  children: React.ReactNode;
  recommendation: React.ReactNode;
  params: {location?: string};
}){
  return (
      <div>
        <div> {children} </div>
        <div className="flex flex-col justify-center items-center">
          <div>{recommendation}</div>
        </div>
      </div>
  );
}
