import { RType } from '../base/rtype';
import { DebugInfo } from '../../types';

/** RISC-V RV32M rem instruction. */
export class REM extends RType {
  /**
   * Creates a new RV32M rem instruction.
   *
   * @param rd  - Destination register.
   * @param rs1 - Source register 1.
   * @param rs2 - Source register 2.
   */
  constructor(debugInfo: DebugInfo, rd: number, rs1: number, rs2: number) {
    super(debugInfo, 'rem', 0x33, rd, 0x6, rs1, rs2, 0x1);
  }
}
