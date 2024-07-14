import ItemGrid from "@/components/marketplace/ItemGrid";
import React from "react";

type Props = {};

const ExplorerPage: React.FC<Props> = ({}) => {
  return (
    <div className="container mx-auto py-10">
      <ItemGrid />
    </div>
  );
};

export default ExplorerPage;
