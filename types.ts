import React from 'react';

export interface NavItem {
  label: string;
  path: string;
}

export interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  imageUrl?: string;
}

export interface ProductProps {
  id: string;
  title: string;
  subtitle: string;
  description: string[];
  features: string[];
  badge?: string;
}

export enum ConsultationType {
  LOAN = '기업자금대출',
  PAYROLL = '급여이체',
  TAX_LEGAL = '세무/법무자문',
  OTHER = '기타',
}

export interface ConsultationFormState {
  companyName: string;
  ownerName: string;
  contact: string;
  interests: ConsultationType[];
  preferredTime: string;
  memo: string;
}