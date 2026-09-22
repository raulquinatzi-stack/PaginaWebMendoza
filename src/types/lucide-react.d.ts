declare module "lucide-react" {
  import * as React from "react";

  export interface LucideProps extends React.SVGProps<SVGSVGElement> {
    size?: string | number;
    color?: string;
    strokeWidth?: string | number;
    className?: string;
  }

  export type LucideIcon = React.ForwardRefExoticComponent<
    LucideProps & React.RefAttributes<SVGSVGElement>
  >;

  export const Scale: LucideIcon;
  export const Gavel: LucideIcon;
  export const Landmark: LucideIcon;
  export const ShieldCheck: LucideIcon;
  export const ShieldAlert: LucideIcon;
  export const Shield: LucideIcon;
  export const ArrowLeft: LucideIcon;
  export const ArrowRight: LucideIcon;
  export const ArrowUpRight: LucideIcon;
  export const CheckCircle2: LucideIcon;
  export const CheckCircle: LucideIcon;
  export const PhoneCall: LucideIcon;
  export const Phone: LucideIcon;
  export const Terminal: LucideIcon;
  export const Menu: LucideIcon;
  export const X: LucideIcon;
  export const FileText: LucideIcon;
  export const Lock: LucideIcon;
  export const Award: LucideIcon;
  export const Building2: LucideIcon;
  export const Building: LucideIcon;
  export const AlertTriangle: LucideIcon;
  export const MessageSquare: LucideIcon;
  export const FileWarning: LucideIcon;
  export const Clock: LucideIcon;
  export const FileSpreadsheet: LucideIcon;
  export const Quote: LucideIcon;
  export const Star: LucideIcon;
  export const Mail: LucideIcon;
  export const MapPin: LucideIcon;
  export const Send: LucideIcon;
  export const AlertCircle: LucideIcon;
  export const Maximize2: LucideIcon;
  export const Minimize2: LucideIcon;
  export const LayoutDashboard: LucideIcon;
  export const Download: LucideIcon;
  export const Trash2: LucideIcon;
  export const Search: LucideIcon;
  export const PlusCircle: LucideIcon;
  export const Sparkles: LucideIcon;

  const anyIcon: any;
  export default anyIcon;
}
