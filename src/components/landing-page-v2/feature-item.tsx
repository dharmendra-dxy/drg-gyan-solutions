import { CheckCircle } from "lucide-react";

const FeatureItem = ({ text }: {text:string}) => (
  <div className="flex items-center gap-3 mb-3">
    <CheckCircle className="size-4 text-blue-500 flex-shrink-0" />
    <span className="text-gray-600 text-sm">{text}</span>
  </div>
);

export default FeatureItem;