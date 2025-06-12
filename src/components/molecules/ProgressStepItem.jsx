import ApperIcon from '@/components/ApperIcon';
import Text from '@/components/atoms/Text';

const ProgressStepItem = ({ step, currentStep, index, totalSteps }) => {
  const isActive = currentStep >= step.id;
  const isComplete = currentStep > step.id;

  return (
    <div className="flex items-center">
      <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all duration-200 ${
        isActive
          ? 'bg-accent border-accent text-white'
          : 'border-gray-300 text-gray-400'
      }`}>
        {isComplete ? (
          <ApperIcon name="Check" className="w-5 h-5" />
        ) : (
          <ApperIcon name={step.icon} className="w-5 h-5" />
        )}
      </div>
      <div className="ml-3 hidden md:block">
        <Text as="p" className={`text-sm font-medium ${
          isActive ? 'text-accent' : 'text-gray-500'
        }`}>
          Step {step.id}
        </Text>
        <Text as="p" className={`text-xs ${
          isActive ? 'text-gray-900' : 'text-gray-400'
        }`}>
          {step.title}
        </Text>
      </div>
      
      {index < totalSteps - 1 && (
        <div className={`w-8 h-0.5 mx-4 ${
          isComplete ? 'bg-accent' : 'bg-gray-300'
        }`}></div>
      )}
    </div>
  );
};

export default ProgressStepItem;