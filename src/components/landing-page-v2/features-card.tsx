import FeatureItem from "./feature-item";

interface Props {
  icon?: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
}

export const FeaturesCard = ({
  icon: Icon,
  title,
  description,
  features,
}: Props) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:-translate-y-2 transition-all duration-300">

      <div className={`bg-secondary p-4`}>
        {Icon &&<Icon className="size-8 text-white mb-2" />}
        <h3 className="text-lg font-semibold mb-3">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>
      </div>

      <div className="p-4">
        <h4 className="font-semibold mb-4">Key features</h4>
        <div className="space-y-3">
          {features.map((feature: string, idx: number) => (
            <FeatureItem key={idx} text={feature} />
          ))}
        </div>
      </div>
    </div>
  );
};
