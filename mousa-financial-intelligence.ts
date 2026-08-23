// 👑 إمبراطورية منصة موسى العظمى العالمية - نظام تشغيل عيادات الخليج السيادي (Mousa-OS)
// المكون: المحرك السيادي للذكاء المالي، منع الاحتيال والاختلاس، والتنبؤ الاقتصادي وتكلفة التشغيل

export interface FixedOperationalCosts {
  rentAndRealEstate: number;     // إيجارات مقرات العيادات بالخليج
  staffSalaries: number;          // رواتب الموظفين الثابتة (استقبال، تمريض، إدارة)
  utilityAndEnergyBills: number;  // فواتير الطاقة والمياه والاتصالات الرقمية
  equipmentMaintenanceContracts: number; // عقود صيانة كراسي وأجهزة الأسنان والأشعة
}

export interface AuditableTransaction {
  transactionId: string;
  clinicId: string;
  recordedAmount: number;
  actualMaterialCost: number;
  discountApplied: number;
  cashierEmployeeId: string;
  paymentMethod: 'Cash' | 'Card' | 'Insurance';
}

export interface AIAnomalyReport {
  isAnomalyDetected: boolean;
  fraudRiskScore: number; // من 0% إلى 100%
  justificationReason: string;
  actionTaken: 'SYSTEM-CLEAR' | 'LOCK-TRANSACTION-ALERT-OWNER';
}

export class MousaFinancialIntelligenceOracle {
  private activeLedgerData: AuditableTransaction[] = [];

  /**
   * 🛡️ 1. محرك التدقيق الجنائي ومنع الاحتيال والاختلاس المالي (AI Fraud & Anomaly Shield)
   * يحلل العمليات المالية لحظياً ويكتشف الخصومات غير المبررة أو التناقضات بين المواد والكاش
   */
  public auditTransactionSecurity(tx: AuditableTransaction): AIAnomalyReport {
    console.log(`\n[🔍 الدرع الجنائي لموسى]: جاري التدقيق المالي الفوري للعملية رقم: ${tx.transactionId}`);
    
    let riskScore = 0;
    let reason = "العملية مستقرة ومطابقة لمعايير الجودة المالية للمنصة.";
    let finalAction: AIAnomalyReport['actionTaken'] = 'SYSTEM-CLEAR';

    // القواعد البرمجية الذكية لكشف التلاعب:
    // القاعدة أ: إذا تجاوز الخصم الممنوح من الموظف نسبة 35% من القيمة بدون إذن مسبق
    if (tx.discountApplied > (tx.recordedAmount * 0.35)) {
      riskScore += 50;
      reason = "🚨 تنبيه: تم رصد خصم مالي ضخم وغير مبرر يتجاوز صلاحيات الموظف النقدي!";
    }

    // القاعدة ب: إذا كانت تكلفة المواد الطبية المسجلة صفرية لعملية جراحية معقدة (مؤشر اختلاس مواد أو علاج وهمي)
    if (tx.actualMaterialCost === 0 && tx.recordedAmount > 1000) {
      riskScore += 40;
      reason = "🚨 تنبيه: تباين حاد! تم تسجيل فاتورة علاجية كبرى دون خصم أي مستهلكات طبية من المخزن.";
    }

    if (riskScore >= 50) {
      finalAction = 'LOCK-TRANSACTION-ALERT-OWNER';
    }

    const report: AIAnomalyReport = {
      isAnomalyDetected: riskScore >= 50,
      fraudRiskScore: riskScore,
      justificationReason: reason,
      actionTaken: finalAction
    };

    this.printAuditLog(tx, report);
    return report;
  }

  /**
   * ⏱️ 2. محرك التنبؤ بالتدفقات النقدية وصافي أرباح العيادة المستقبلية (Predictive Cash Flow Oracle)
   * يحسب المدرج المالي للعيادة ويحذر الإدارة من نقص السيولة قبل حدوثه بناء على الحجوزات والمصاريف الثابتة
   */
  public forecastNextMonthRunway(
    projectedGrossRevenue: number, 
    fixedCosts: FixedOperationalCosts, 
    currency: string
  ): void {
    
    const totalFixedCosts = fixedCosts.rentAndRealEstate + 
                            fixedCosts.staffSalaries + 
                            fixedCosts.utilityAndEnergyBills + 
                            fixedCosts.equipmentMaintenanceContracts;

    const projectedNetCashFlow = projectedGrossRevenue - totalFixedCosts;

    console.log(`\n==================================================================`);
    console.log(`🔮 محرك الاستشراف والتنبؤ الاقتصادي السحابي - منصة موسى العظمى 📈`);
    console.log(`==================================================================`);
    console.log(`📊 إجمالي الإيرادات المتوقعة للشهر القادم (حجوزات نشطة): ${projectedGrossRevenue} ${currency}`);
    console.log(`📉 إجمالي المصاريف التشغيلية الثابتة الملزمة: ${totalFixedCosts} ${currency}`);
    console.log(`   [- العقارات والإيجارات: ${fixedCosts.rentAndRealEstate} ${currency}]`);
    console.log(`   [- رواتب الموظفين والأطقم: ${fixedCosts.staffSalaries} ${currency}]`);
    
    if (projectedNetCashFlow > 0) {
      console.log(`\n🟩 [الوضع الاقتصادي التنبؤي]: إيجابي! التدفق النقدي الصافي المتوقع: +[ ${projectedNetCashFlow} ${currency} ]. السيولة ممتازة للتوسع وضخ استثمارات جديدة في المخازن.`);
    } else {
      console.log(`\n🟥 [🚨 تحذير مالي استباقي]: عجز متوقع في السيولة بقيمة: [ ${projectedNetCashFlow} ${currency} ]! يوصى فوراً بتفعيل باقات عروض التنشيط الوقائي لملء المواعيد الفارغة وخفض الهدر بالمخزن.`);
    }
    console.log(`==================================================================`);
  }

  /**
   * ⚙️ طباعة تقرير الجودة والنزاهة المالية لمنع التلاعب
   */
  private printAuditLog(tx: AuditableTransaction, report: AIAnomalyReport): void {
    console.log(`👤 الموظف المسؤول: ${tx.cashierEmployeeId} | طريقة الدفع: ${tx.paymentMethod}`);
    console.log(`📊 مؤشر AI لمخاطر الاحتيال والاختلاس: [ ${report.fraudRiskScore}% ]`);
    console.log(`⚙️ قرار النظام التلقائي وحصانة الفاتورة: [ ${report.actionTaken} ] -> ${report.justificationReason}`);
    console.log(`------------------------------------------------------------------`);
  }
}
