import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32A sc.w instruction. */
export class SCW extends RType {
  /**
   * Creates a new RV32A sc.w instruction.
   *
   * @param debugInfo - Instruction debug information.
   * @param rd        - Destination register.
   * @param rs1       - Source register 1.
   * @param rs2       - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    let aqrl = 0;
    if (debugInfo.symbol.text?.indexOf('.aqrl')) aqrl = 0x3;
    if (debugInfo.symbol.text?.indexOf('.qa')) aqrl = 0x2;
    if (debugInfo.symbol.text?.indexOf('.rl')) aqrl = 0x1;
    super(debugInfo, 'sc.w', 0x2f, rd, 0x2, rs1, rs2, (0b00011 << 2) | aqrl);
  }
}
